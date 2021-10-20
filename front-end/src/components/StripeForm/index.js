import React, { useState } from "react";
import {
  Wrapper,
  CARD_OPTIONS,
  Header,
  SubHeader,
  ButtonWrapper,
  ErrorField,
} from "./styles";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button } from "..";
import axios from "axios";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
import { SuccessModal, LoadingModal } from "..";

const StripeForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null);
  const [showSiteModal, setShowSiteModal] = useRecoilState(atoms.showSiteModal);
  const [cart, setCart] = useRecoilState(atoms.cart);
  const { totalPrice, title } = cart;
  const handleSubmit = async (e) => {
    e.preventDefault();
    setCardError(null);
    setShowSiteModal(<LoadingModal />);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: elements.getElement(CardElement),
    });
    if (!error) {
      try {
        const { id } = paymentMethod;
        const response = await axios.post("/payment", {
          amount: totalPrice * 100,
          id,
        });
        if (response.data.success) {
          setShowSiteModal(null);
          console.log("Successful Payment");
          setShowSiteModal(<SuccessModal />);
        }
      } catch (error) {
        setShowSiteModal(null);
        console.log("Error", error);
      }
    } else {
      setCardError(error.message);
      console.log(error.message);
    }
  };
  return (
    <>
      <Wrapper>
        <Header>Please enter your credit card information</Header>
        <SubHeader>
          You will be charged ${totalPrice} for a {title} room at the Stripe
          Hotel.
        </SubHeader>
        <SubHeader>
          For testing purposes, enter 4242 4242 4242 4242 424 424 with a valid
          zip code
        </SubHeader>
      </Wrapper>
      <form onSubmit={handleSubmit}>
        <fieldset className="FormGroup">
          <div className="FormRow">
            <CardElement options={CARD_OPTIONS} />
          </div>
        </fieldset>
        <ErrorField>{cardError && cardError}</ErrorField>
        <ButtonWrapper>
          <Button text="Pay Now" width={"75%"} />
        </ButtonWrapper>
      </form>
    </>
  );
};

export default StripeForm;
