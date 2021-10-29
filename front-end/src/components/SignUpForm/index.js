import React, { useState } from "react";
import { AddressForm, Button, InputField } from "..";
import { Wrapper, FirstStep, Header, SubHeader, ButtonWrapper } from "./styles";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
import { useTheme } from "styled-components";
import { useFormik } from "formik";
import { signUpOne } from "../../validations";

const SignUpForm = () => {
  const theme = useTheme();
  const [page, setPage] = useState(1);
  const signUpFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
      repeatPassword: "",
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: signUpOne,
  });

  const checkFirstDisabled = () => {
    if (Object.keys(signUpFormik.errors).length > 0) {
      return true;
    } else if (
      signUpFormik.values.email.length < 1 ||
      signUpFormik.values.password.length < 1
    ) {
      return true;
    } else return false;
  };
  return (
    <Wrapper page={page}>
      <Header>Join Stripe Hotel</Header>
      {page === 1 && (
        <FirstStep>
          <SubHeader>
            Please enter your e-mail address and choose a password
          </SubHeader>
          <InputField
            label={"Enter your e-mail address"}
            onChange={signUpFormik.handleChange("email")}
            onBlur={signUpFormik.handleBlur("email")}
            value={signUpFormik.values.email}
            borderColor={theme.colors.goButton}
            error={signUpFormik.touched.email && signUpFormik.errors.email}
          />
          <InputField
            label={"Enter a password"}
            onChange={signUpFormik.handleChange("password")}
            onBlur={signUpFormik.handleBlur("password")}
            value={signUpFormik.values.password}
            borderColor={theme.colors.goButton}
            error={
              signUpFormik.touched.password && signUpFormik.errors.password
            }
          />
          <InputField
            label={"Repeat password"}
            onChange={signUpFormik.handleChange("repeatPassword")}
            onBlur={signUpFormik.handleBlur("repeatPassword")}
            value={signUpFormik.values.repeatPassword}
            borderColor={theme.colors.goButton}
            error={
              signUpFormik.touched.repeatPassword &&
              signUpFormik.errors.repeatPassword
            }
          />
          <ButtonWrapper>
            <Button
              width={"100%"}
              backgroundColor={theme.colors.goButton}
              text={"Continue"}
              // disabled={checkFirstDisabled()}
              onClick={() => {
                setPage(2);
              }}
            />
          </ButtonWrapper>
        </FirstStep>
      )}
      {page === 2 && <AddressForm formik={signUpFormik} />}
    </Wrapper>
  );
};

export default SignUpForm;
