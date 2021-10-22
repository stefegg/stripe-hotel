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
            <span>${getCost()}</span>
          </RoomPrice>
          <RoomPrice>
            <span>Taxes / Fees:</span> <span>${getTax()}</span>
          </RoomPrice>
          <RoomPrice>
            <span>Total:</span> <span>${getTotal()}</span>
          </RoomPrice>
          <ButtonWrapper>
            <Button
              width={"100%"}
              text={!showCheckout ? "Checkout" : "Modify Order"}
              backgroundColor={"#f6a4eb"}
              textColor={"#fff"}
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
