import React from "react";
import { Wrapper, HeaderOne, SubHeader } from "./styles";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
import { useTheme } from "styled-components";

const NavTop = () => {
  const [showCheckout, setShowCheckout] = useRecoilState(atoms.checkout);
  const theme = useTheme();

  return (
    <Wrapper>
      <HeaderOne onClick={() => setShowCheckout(false)}>Stripe Hotel</HeaderOne>
      <SubHeader>A Better Hotel Experience</SubHeader>
    </Wrapper>
  );
};

export default NavTop;
