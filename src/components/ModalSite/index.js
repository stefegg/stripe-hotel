import React, { useEffect, useState } from "react";
import { useTheme } from "styled-components";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
import { Wrapper, InnerWrapper } from "./styles";

const ModalSite = () => {
  const theme = useTheme();
  const [showSiteModal] = useRecoilState(atoms.showSiteModal);
  return (
    <>
      {showSiteModal ? (
        <Wrapper>
          <InnerWrapper>{showSiteModal}</InnerWrapper>
        </Wrapper>
      ) : null}
    </>
  );
};

export default ModalSite;
