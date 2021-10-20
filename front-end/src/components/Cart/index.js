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
  const [cart] = useRecoilState(atoms.cart);
  const [showCheckout, setShowCheckout] = useRecoilState(atoms.checkout);

  const clickCheckout = () => {
    setShowCheckout(true);
  };
  return (
    <Wrapper>
      {cart ? (
        <CartWrapper>
          <CartHeader>Your selection...</CartHeader>
          <RoomImage src={cart.image} />
          <RoomTitle>{cart.title}</RoomTitle>
          <RoomDetails>5 Star Breakfast Included</RoomDetails>
          <RoomPrice>
            <span>Cost Per Night:</span> <span>${cart.price}</span>
          </RoomPrice>
          <RoomPrice>
            <span>Taxes / Fees:</span> <span>${cart.tax}</span>
          </RoomPrice>
          <RoomPrice>
            <span>Total:</span> <span>${cart.totalPrice}</span>
          </RoomPrice>
          <ButtonWrapper>
            <Button
              width={"100%"}
              text={"Checkout"}
              border={"1px solid white"}
              backgroundColor={"#f6a4eb"}
              textColor={"white"}
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
