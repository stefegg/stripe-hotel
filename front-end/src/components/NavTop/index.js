import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Wrapper, HeaderOne, SubHeader, Icon } from "./styles";
import { ModalTheme } from "../index";
import { useRecoilState } from "recoil";

const NavTop = () => {
  return (
    <Wrapper>
      <HeaderOne>Stripe Hotel</HeaderOne>
      <SubHeader>A Better Hotel Experience</SubHeader>
    </Wrapper>
  );
};

export default NavTop;
