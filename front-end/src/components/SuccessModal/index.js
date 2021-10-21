import React from "react";
import { Wrapper, Header, Body, ButtonWrapper } from "./styles";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
import { Button } from "..";

const SuccessModal = () => {
  const [showCheckout, setShowCheckout] = useRecoilState(atoms.checkout);
  const [showSiteModal, setShowSiteModal] = useRecoilState(atoms.showSiteModal);
  const [cart, setCart] = useRecoilState(atoms.cart);
  const { title, totalPrice } = cart;
  const closeModal = () => {
    setShowSiteModal(false);
    setShowCheckout(false);
    setCart(null);
  };
  return (
    <Wrapper>
      <Header>Congratulations!</Header>
      <Body>
        <p>You have booked a {title} room!</p>
        <p> And all it cost you was ${totalPrice}!</p>
        <p>Thank you for booking at the Stripe Hotel!</p>
      </Body>
      <ButtonWrapper>
        <Button text={"Awesome!"} width={"100%"} onClick={closeModal} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default SuccessModal;
