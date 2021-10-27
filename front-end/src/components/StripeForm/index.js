import React, { useState } from "react";
import {
  Wrapper,
  CARD_OPTIONS,
  Header,
  SubHeader,
  ButtonWrapper,
  ErrorField,
  DoubleRow,
  BillingInfo,
  SingleRow,
  PostalRow,
} from "./styles";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { Button } from "..";
import axios from "axios";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
import { SuccessModal, LoadingModal, InputField } from "..";
import { useTheme } from "styled-components";
import { useFormik } from "formik";
import { validationSchema } from "./validation";

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
    validationSchema: validationSchema,
  });
  console.log(Object.keys(stripeFormik.touched).length, "-------str");
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
  return (
    <>
      <form
        formik={stripeFormik}
        style={{ width: "100%" }}
        onSubmit={handleSubmit}
      >
        <Header>Please enter your billing information</Header>
        <BillingInfo>
          <SingleRow>
            <InputField
              label={"E-mail address"}
              value={stripeFormik.values.email}
              onChange={stripeFormik.handleChange("email")}
              onBlur={stripeFormik.handleBlur("email")}
              borderColor={theme.colors.goButton}
              error={stripeFormik.touched.email && stripeFormik.errors.email}
              type={"email"}
            />
          </SingleRow>
          <DoubleRow>
            <InputField
              label={"First Name"}
              value={stripeFormik.values.firstName}
              onChange={stripeFormik.handleChange("firstName")}
              onBlur={stripeFormik.handleBlur("firstName")}
              borderColor={theme.colors.goButton}
              error={
                stripeFormik.touched.firstName && stripeFormik.errors.firstName
              }
            />
            <InputField
              label={"Last Name"}
              value={stripeFormik.values.lastName}
              onChange={stripeFormik.handleChange("lastName")}
              onBlur={stripeFormik.handleBlur("lastName")}
              borderColor={theme.colors.goButton}
              error={
                stripeFormik.touched.lastName && stripeFormik.errors.lastName
              }
            />
          </DoubleRow>
          <SingleRow>
            <InputField
              label={"Street Address"}
              value={stripeFormik.values.addressOne}
              onChange={stripeFormik.handleChange("addressOne")}
              onBlur={stripeFormik.handleBlur("addressOne")}
              borderColor={theme.colors.goButton}
              error={
                stripeFormik.touched.addressOne &&
                stripeFormik.errors.addressOne
              }
            />
          </SingleRow>
          <SingleRow>
            <InputField
              label={"Apt #, Floor, etc. (optional)"}
              value={stripeFormik.values.addressTwo}
              onChange={stripeFormik.handleChange("addressTwo")}
              onBlur={stripeFormik.handleBlur("addressTwo")}
              borderColor={theme.colors.goButton}
              error={
                stripeFormik.touched.addressTwo &&
                stripeFormik.errors.addressTwo
              }
            />
          </SingleRow>
          <DoubleRow>
            <InputField
              label={"City "}
              value={stripeFormik.values.addressCity}
              onChange={stripeFormik.handleChange("addressCity")}
              onBlur={stripeFormik.handleBlur("addressCity")}
              borderColor={theme.colors.goButton}
              error={
                stripeFormik.touched.addressCity &&
                stripeFormik.errors.addressCity
              }
            />
            <InputField
              label={"State"}
              value={stripeFormik.values.addressState}
              onChange={stripeFormik.handleChange("addressState")}
              onBlur={stripeFormik.handleBlur("addressState")}
              borderColor={theme.colors.goButton}
              error={
                stripeFormik.touched.addressState &&
                stripeFormik.errors.addressState
              }
            />
          </DoubleRow>
          <PostalRow>
            <InputField
              label={"Postal Code"}
              value={stripeFormik.values.addressPostal}
              onChange={stripeFormik.handleChange("addressPostal")}
              onBlur={stripeFormik.handleBlur("addressPostal")}
              borderColor={theme.colors.goButton}
              error={
                stripeFormik.touched.addressPostal &&
                stripeFormik.errors.addressPostal
              }
              inputWidth={"50%"}
            />
          </PostalRow>
        </BillingInfo>
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
            backgroundColor={"#03c51d"}
            disabled={
              Object.keys(stripeFormik.touched).length <= 7 ||
              Object.keys(stripeFormik.errors).length > 0
            }
          />
        </ButtonWrapper>
      </form>
    </>
  );
};

export default StripeForm;
