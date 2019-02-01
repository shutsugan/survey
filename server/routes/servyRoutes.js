const mongoose = require('mongoose');
const Path = require('path-parser').default;
const { URL } = require('url');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const template = require('../services/emailTemplates/servyTemplate');
const Mailer = require('../services/Mailer');

const Servy = mongoose.model('servys');

module.exports = app => {
  app.get('/api/servys', requireLogin, async ({user}, res) => {
      const servys = await Servy.find({_user: user.id})
        .select({recipients: false});

      res.send(servys);
  });

  app.get('/api/servys/:servyId/:choice', (req, res) => res.send('Thank you for your time!'));

  app.post('/api/servys/webhooks', ({body}, res) => {
    const events = body
      .map(({url, email}) => {
        const pathname = new URL(url).pathname;
        const p = new Path('/api/servys/:servyId/:choice');
        const match = p.test(pathname);

        if (match) return {email, ...match};
      })
      .filter(event => {
        if (event) return event;
      });

      const filtered_events = [...new Set(events.map(event => JSON.stringify(event)))]
        .map(event => JSON.parse(event));

        filtered_events.forEach(({servyId, email, choice}) => {
          Servy.updateOne({
            _id: servyId,
            recipients: {
              $elemMatch: {email: email, responded: false}
            }
          }, {
            $inc: {[choice]: 1},
            $set: {'recipients.$.responded': true},
            lastResponded: new Date()
          }).exec();
        });

      res.send({});
  });

  app.post('/api/servys', requireLogin, requireCredits, async (req, res) => {
    const {title, subject, body, recipients} = req.body;

    const servy = new Servy({
      title,
      subject,
      body,
      recipients: recipients.split(',').map(email => ({email})),
      _user: req.user.id,
      dateSent: Date.now()
    });

    try {
      //send email
      const mailer = new Mailer(servy, template(servy));
      await mailer.send();
      await servy.save();

      req.user.credits -= 1;
      const new_user = req.user.save();

      res.send(new_user);
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
