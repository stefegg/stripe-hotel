import React from "react";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
import { Wrapper, InnerWrapper } from "./styles";

const ModalSite = () => {
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
