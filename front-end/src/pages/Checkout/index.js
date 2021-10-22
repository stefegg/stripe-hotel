import React from "react";
import { Body, LeftPane, RightPane } from "./styles";
import { StripeContainer, Cart } from "../../components";
const Checkout = () => {
  return (
    <Body>
      <LeftPane>
        <StripeContainer />
      </LeftPane>
      <RightPane>
        <Cart checkout />
      </RightPane>
    </Body>
  );
};

export default Checkout;
