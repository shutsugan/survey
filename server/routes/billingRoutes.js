const requireLogin = require('../middlewares/requireLogin');
const keys = require('../config/keys');
const stripe = require('stripe')(keys.stripeSercetKey);

module.exports = app => {
  app.post('/api/stripe', requireLogin, async ({body, user}, res) => {
    const charge_options = {
      amount: 500,
      currency: 'usd',
      description: '$5 for 5 credits',
      source: body.id
    };

    const charge = await stripe.charges.create(charge_options);
    user.credits += 5;
    const updated_user = await user.save();

    res.send(updated_user);
  });
};
