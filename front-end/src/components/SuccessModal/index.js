import React from "react";
import { Wrapper, Header, Body, ButtonWrapper } from "./styles";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
import { Button } from "..";

const SuccessModal = () => {
  const [showCheckout, setShowCheckout] = useRecoilState(atoms.checkout);
  const [showSiteModal, setShowSiteModal] = useRecoilState(atoms.showSiteModal);
  const [cart, setCart] = useRecoilState(atoms.cart);
  const { title, startDate, endDate, totalCost } = cart;
  const closeModal = () => {
    setShowSiteModal(false);
    setShowCheckout(false);
    setCart(null);
  };
  return (
    <Wrapper>
      <Header>Congratulations!</Header>
      <Body>
        <p>Thank you for booking a {title} room</p>
        <p>
          We look forward to seeing you {startDate} - {endDate}
        </p>
        <p>Thank you for booking at the Stripe Hotel!</p>
        <p> Your card was charged ${totalCost.toFixed(2)} using Stripe</p>
      </Body>
      <ButtonWrapper>
        <Button text={"Awesome!"} width={"100%"} onClick={closeModal} />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default SuccessModal;
