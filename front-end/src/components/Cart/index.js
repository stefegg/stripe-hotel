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

const Cart = (checkout) => {
  const [cart] = useRecoilState(atoms.cart);
  const [showCheckout, setShowCheckout] = useRecoilState(atoms.checkout);

  const clickCheckout = () => {
    setShowCheckout(!showCheckout);
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
