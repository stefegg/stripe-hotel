import React, { useEffect, useState } from "react";

import { Wrapper } from "./styles";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
const Cart = ({ cart }) => {
  // const [cart] = useRecoilState(atoms.cart);
  // useEffect(() => {}, [cart]);
  // console.log(cart, "------cart in cart");
  return <Wrapper>{"Add an item"}</Wrapper>;
};

export default Cart;
