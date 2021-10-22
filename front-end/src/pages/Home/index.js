import React from "react";
import { OpenPanel, Cart } from "../../components";
import { Body, LeftPane, RightPane } from "./styles";
import { roomInfo } from "./constants";

const Home = () => {
  return (
    <>
      <Body>
        <LeftPane>
          {roomInfo.map((room, index) => (
            <OpenPanel data={room} key={index} />
          ))}
        </LeftPane>
        <RightPane>
          <Cart />
        </RightPane>
      </Body>
    </>
  );
};

export default Home;
