import React, { useEffect, useState } from "react";

import { Wrapper } from "./styles";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
const Cart = () => {
  const [cart] = useRecoilState(atoms.cart);
  return <Wrapper>{cart ? cart.title : "Add an item"}</Wrapper>;
};

export default Cart;
