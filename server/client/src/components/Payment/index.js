import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const Payment = _ => {
  return (
    <StripeCheckout
      name="Servy"
      description="$5 for 5 email credits"
      amount={500}
      token={token => console.log(token)}
      stripeKey={process.env.REACT_APP_STRIPE_KEY}>

      <button className="button button--pay">Add credits</button>
    </StripeCheckout>

  );
};

export default Payment;
