import React from "react";
import {
  Wrapper,
  AddHeader,
  CartImage,
  AddWrapper,
  CartWrapper,
  CartHeader,
  RoomTitle,
  RoomPrice,
  RoomDetails,
  RoomImage,
  ButtonWrapper,
  RoomAmount,
} from "./styles";
import { cartPng } from "../../assets";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
import { Button } from "../index";

const Cart = () => {
  const [cart, setCart] = useRecoilState(atoms.cart);
  const [showCheckout, setShowCheckout] = useRecoilState(atoms.checkout);

  const clickCheckout = () => {
    const total = { totalCost: getTotal() };
    const finalCart = { ...cart, ...total };
    setCart(finalCart);
    setShowCheckout(!showCheckout);
  };
  const getCost = () => {
    return cart.price * cart.numNights;
  };
  const getTax = () => {
    return cart.price * cart.numNights * 0.1;
  };
  const getTotal = () => {
    return cart.price * cart.numNights + cart.price * cart.numNights * 0.1;
  };
  return (
    <Wrapper>
      {cart ? (
        <CartWrapper>
          <CartHeader>
            {showCheckout ? "Your order..." : "Your selection..."}
          </CartHeader>
          <RoomImage src={cart.image} />
          <RoomTitle>{cart.title}</RoomTitle>
          <RoomDetails>
            {cart.startDate} - {cart.endDate}
          </RoomDetails>
          <RoomPrice>
            <span>Room Total for {cart.numNights} nights:</span>
            <RoomAmount>${getCost().toFixed(2)}</RoomAmount>
          </RoomPrice>
          <RoomPrice>
            <span>Taxes / Fees:</span>{" "}
            <RoomAmount>${getTax().toFixed(2)}</RoomAmount>
          </RoomPrice>
          <RoomPrice>
            <span>Total:</span>{" "}
            <RoomAmount>${getTotal().toFixed(2)}</RoomAmount>
          </RoomPrice>
          <ButtonWrapper>
            <Button
              width={"100%"}
              text={!showCheckout ? "Checkout" : "Modify Order"}
              backgroundColor={!showCheckout ? "#03c51d" : "#ffdd00"}
              textColor={!showCheckout ? "#E5E5E5" : "#33435B"}
              onClick={() => clickCheckout()}
            />
          </ButtonWrapper>
        </CartWrapper>
      ) : (
        <AddWrapper>
          <AddHeader>Your cart is empty</AddHeader>
          <CartImage src={cartPng} />
        </AddWrapper>
      )}
    </Wrapper>
  );
};

export default Cart;
