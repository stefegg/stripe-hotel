import React from "react";
import { InputField, Button } from "..";
import {
  Wrapper,
  Body,
  Header,
  Footer,
  InputWrapper,
  ButtonWrapper,
  Create,
  Icon,
} from "./styles";
import { useTheme } from "styled-components";
import atoms from "../../atoms";
import { useRecoilState } from "recoil";
import { useFormik } from "formik";
import { loginSchema } from "../../validations";

const LoginModal = () => {
  const theme = useTheme();
  const [showSiteModal, setShowSiteModal] = useRecoilState(atoms.showSiteModal);
  const loginFormik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validateOnChange: false,
    validateOnBlur: true,
    validationSchema: loginSchema,
  });
  const checkDisabled = () => {
    if (Object.keys(loginFormik.errors).length > 0) {
      return true;
    } else if (
      loginFormik.values.email.length < 1 &&
      loginFormik.values.password.length < 1
    ) {
      return true;
    } else return false;
  };
  return (
    <Wrapper>
      <Body>
        <Icon onClick={() => setShowSiteModal(null)}>X</Icon>
        <Header>Login</Header>
        <InputWrapper>
          <InputField
            label={"Email"}
            onChange={loginFormik.handleChange("email")}
            onBlur={loginFormik.handleBlur("email")}
            error={loginFormik.touched.email && loginFormik.errors.email}
            borderColor={theme.colors.goButton}
          />
          <InputField
            label={"Password"}
            type={"password"}
            onChange={loginFormik.handleChange("password")}
            onBlur={loginFormik.handleBlur("password")}
            error={loginFormik.touched.password && loginFormik.errors.password}
            borderColor={theme.colors.goButton}
          />
        </InputWrapper>
        <ButtonWrapper>
          <Button
            width={"100%"}
            text={"Login"}
            backgroundColor={theme.colors.goButton}
            disabled={checkDisabled()}
          />
          <Footer>
            Don't have an account? <Create>Click here to create one</Create>
          </Footer>
        </ButtonWrapper>
      </Body>
    </Wrapper>
  );
};

export default LoginModal;
