const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');
const requireCredits = require('../middlewares/requireCredits');
const template = require('../services/emailTemplates/servyTemplate');
const Mailer = require('../services/Mailer');

const Servy = mongoose.model('servys');

module.exports = app => {
  app.get('/api/servys/thanks', (req, res) => res.send('Thank you for your time!'));

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
