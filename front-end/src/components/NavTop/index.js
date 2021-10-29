import React from "react";
import {
  Wrapper,
  HeaderOne,
  SubHeader,
  HeaderPrimary,
  SubHeaderWrapper,
  UtilIcon,
  UtilWrapper,
  Notification,
} from "./styles";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
import { useTheme } from "styled-components";
import { account, cartPng } from "../../assets";
import { LoginModal } from "..";

const NavTop = () => {
  const [showCheckout, setShowCheckout] = useRecoilState(atoms.checkout);
  const [showSiteModal, setShowSiteModal] = useRecoilState(atoms.showSiteModal);
  const [showCart, setShowCart] = useRecoilState(atoms.showCart);
  const [showSignUp, setShowSignUp] = useRecoilState(atoms.signUp);
  const [cart, setCart] = useRecoilState(atoms.cart);
  const theme = useTheme();
  const clickLogo = () => {
    setShowCheckout(false);
    setShowSignUp(false);
  };
  return (
    <Wrapper>
      <HeaderOne onClick={() => clickLogo()}>
        <HeaderPrimary>Stripe</HeaderPrimary> H O T E L
        <UtilWrapper>
          <UtilIcon
            src={account}
            onClick={() => setShowSiteModal(<LoginModal />)}
          />
          <UtilIcon
            cart={cart}
            src={cartPng}
            onClick={() => setShowCart(true)}
          />
        </UtilWrapper>
      </HeaderOne>

      <SubHeaderWrapper>
        <SubHeader>A Better Hotel Experience</SubHeader>
      </SubHeaderWrapper>
    </Wrapper>
  );
};

export default NavTop;
