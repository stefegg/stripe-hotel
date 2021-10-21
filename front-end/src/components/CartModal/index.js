import React from "react";
import { Button } from "../index";
import { Wrapper, Body, ButtonWrapper } from "./styles";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";

const CartModal = ({ data }) => {
  const [cart, setCart] = useRecoilState(atoms.cart);
  const [showSiteModal, setShowSiteModal] = useRecoilState(atoms.showSiteModal);
  const addToCart = () => {
    setCart(data);
    setShowSiteModal(null);
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
          onClick={() => addToCart()}
          width={"150px"}
          border={"1px solid green"}
          textColor={"green"}
          backgroundColor={"white"}
        />
        <Button
          text={"No"}
          width={"150px"}
          onClick={() => setShowSiteModal(null)}
          border={"1px solid red"}
          textColor={"red"}
          backgroundColor={"white"}
        />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default CartModal;
