import React from "react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { StripeForm } from "..";
import { PUBLIC_KEY } from "./constants";

const StripeContainer = () => {
  const stripeTestPromise = loadStripe(PUBLIC_KEY);

  return (
    <Elements stripe={stripeTestPromise}>
      <StripeForm />
    </Elements>
  );
};

export default StripeContainer;
