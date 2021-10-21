import React from "react";
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51Jn28rDXBpywiIKRc0YcfotuniqJRzMZnOCN9L5lqQ7nH5mQ828b8zvcNWzwpNraAXoJMKS5HHepKsRdXV91liZg0015wU2xJ6';

  const onToken = token => {
    console.log(token);
    alert("PaymentWSuccessful");
  }

  return (
    <StripeCheckout 
      label="Pay Now"
      name="Kwan's Clothing"
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel="Pay Now"
      token={onToken}
      stripeKey={publishableKey}
    />
  )
}

export default StripeCheckoutButton;
