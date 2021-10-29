import React, { useState } from "react";
import {
  Wrapper,
  CARD_OPTIONS,
  Header,
  SubHeader,
  ButtonWrapper,
  ErrorField,
  SingleRow,
} from "./styles";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button, AddressForm } from "..";
import axios from "axios";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
import { SuccessModal, LoadingModal, InputField } from "..";
import { useTheme } from "styled-components";
import { useFormik } from "formik";
import { billingSchema } from "../../validations";

const StripeForm = () => {
  const stripe = useStripe();
  const elements = useElements();
  const [cardError, setCardError] = useState(null);
  const [showSiteModal, setShowSiteModal] = useRecoilState(atoms.showSiteModal);
  const [cart, setCart] = useRecoilState(atoms.cart);
  const { totalCost } = cart;
  const theme = useTheme();
  const stripeFormik = useFormik({
    initialValues: {
      email: "",
      firstName: "",
      lastName: "",
      addressOne: "",
      addressTwo: "",
      addressCity: "",
      addressState: "",
      addressPostal: "",
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: billingSchema,
  });
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
          amount: totalCost * 100,
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
      setShowSiteModal(null);
      setCardError(error.message);
      console.log(error.message);
    }
  };
  const checkDisabled = () => {
    if (Object.keys(stripeFormik.errors).length > 0) {
      return true;
    } else if (
      stripeFormik.values.email.length < 1 ||
      stripeFormik.values.firstName.length < 1 ||
      stripeFormik.values.lastName.length < 1 ||
      stripeFormik.values.addressOne.length < 1 ||
      stripeFormik.values.addressCity.length < 1 ||
      stripeFormik.values.addressState.length < 1 ||
      stripeFormik.values.addressPostal.length < 1
    )
      return true;
    else return false;
  };
  return (
    <>
      <form
        formik={stripeFormik}
        style={{ width: "100%" }}
        onSubmit={handleSubmit}
      >
        <Header>Please enter your billing information</Header>
        <SingleRow>
          <InputField
            label={"E-mail address"}
            value={stripeFormik.values.email}
            onChange={stripeFormik.handleChange("email")}
            onBlur={stripeFormik.handleBlur("email")}
            borderColor={theme.colors.goButton}
            error={stripeFormik.touched.email && stripeFormik.errors.email}
          />
        </SingleRow>
        <AddressForm formik={stripeFormik} />
        <Wrapper>
          <Header>Please enter your credit card information</Header>

          <SubHeader>
            For testing purposes, enter 4242 4242 4242 4242 424 242 with a valid
            zip code
          </SubHeader>
        </Wrapper>
        <fieldset className="FormGroup">
          <div className="FormRow">
            <CardElement options={CARD_OPTIONS} />
          </div>
        </fieldset>
        <ErrorField>{cardError && cardError}</ErrorField>
        <ButtonWrapper>
          <Button
            text="Pay Now"
            width={"100%"}
            backgroundColor={theme.colors.goButton}
            disabled={checkDisabled()}
          />
        </ButtonWrapper>
      </form>
    </>
  );
};

export default StripeForm;
