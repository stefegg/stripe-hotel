import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { Wrapper, HeaderOne, SubHeader, Icon } from "./styles";
import { ModalTheme } from "../index";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";

const NavTop = () => {
  const theme = useTheme();
  const [showSiteModal, setShowSiteModal] = useRecoilState(atoms.showSiteModal);

  return (
    <Wrapper>
      <HeaderOne>Stef Egbert</HeaderOne>
      <SubHeader>Software Developer</SubHeader>
      <Icon
        onClick={() => setShowSiteModal(<ModalTheme />)}
        // src={theme.icons.settingsIcon}
      />
    </Wrapper>
  );
};

export default NavTop;
