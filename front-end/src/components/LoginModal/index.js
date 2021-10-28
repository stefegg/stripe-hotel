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

const LoginModal = () => {
  const theme = useTheme();
  const [showSiteModal, setShowSiteModal] = useRecoilState(atoms.showSiteModal);

  return (
    <Wrapper>
      <Body>
        <Icon onClick={() => setShowSiteModal(null)}>X</Icon>
        <Header>Login</Header>
        <InputWrapper>
          <InputField label={"Email"} />
          <InputField label={"Password"} />
        </InputWrapper>
        <ButtonWrapper>
          <Button
            width={"100%"}
            text={"Login"}
            backgroundColor={theme.colors.goButton}
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
