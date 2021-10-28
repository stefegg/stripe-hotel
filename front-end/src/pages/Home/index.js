import React from "react";
import { OpenPanel, Cart } from "../../components";
import { Body, LeftPane, RightPane } from "./styles";
import { roomInfo } from "./constants";
import { useTheme } from "styled-components";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";

const Home = () => {
  const theme = useTheme();
  const [showCart, setShowCart] = useRecoilState(atoms.showCart);

  return (
    <>
      <Body showCart={showCart}>
        <LeftPane showCart={showCart}>
          {roomInfo.map((room, index) => (
            <OpenPanel data={room} key={index} />
          ))}
        </LeftPane>
        {showCart ? (
          <RightPane>
            <Cart />
          </RightPane>
        ) : null}
      </Body>
    </>
  );
};

export default Home;
