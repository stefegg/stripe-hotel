import React from "react";
import { Button, DatesModal } from "../index";
import { Wrapper, Body, ButtonWrapper } from "./styles";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
import { useTheme } from "styled-components";

const CartModal = ({ data }) => {
  const [cart, setCart] = useRecoilState(atoms.cart);
  const [showSiteModal, setShowSiteModal] = useRecoilState(atoms.showSiteModal);
  const theme = useTheme();

  const clickYes = () => {
    setCart(null);
    setShowSiteModal(<DatesModal data={data} />);
  };

  return (
    <Wrapper>
      <Body>
        You may only add one room per transaction, this will remove your earlier
        selection from your cart. Are you sure?
      </Body>
      <ButtonWrapper>
        <Button
          text={"Yes"}
          onClick={() => clickYes()}
          width={"150px"}
          border={`1px solid ${theme.colors.goButton}`}
          textColor={`${theme.colors.goButton}`}
          backgroundColor={`${theme.colors.tertiaryLight}`}
        />
        <Button
          text={"No"}
          width={"150px"}
          onClick={() => setShowSiteModal(null)}
          border={`1px solid ${theme.colors.headerTextOne}`}
          textColor={`${theme.colors.headerTextOne}`}
          backgroundColor={`${theme.colors.tertiaryLight}`}
        />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default CartModal;
