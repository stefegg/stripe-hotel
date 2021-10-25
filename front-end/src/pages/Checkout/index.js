import React from "react";
import { Body, LeftPane, RightPane } from "./styles";
import { StripeContainer, Cart } from "../../components";
import { useTheme } from "styled-components";

const Checkout = () => {
  const theme = useTheme();

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
