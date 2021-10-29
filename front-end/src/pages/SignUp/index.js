import React from "react";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
import { useTheme } from "styled-components";
import { Wrapper } from ".//styles";
import { SignUpForm } from "../../components";

const SignUp = () => {
  const theme = useTheme();

  return (
    <Wrapper>
      <SignUpForm />
    </Wrapper>
  );
};

export default SignUp;
