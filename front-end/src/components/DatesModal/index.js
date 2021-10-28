import React from "react";
import { Button, DateRange } from "..";
import {
  Wrapper,
  ButtonWrapper,
  Body,
  InnerBody,
  Header,
  Title,
  Details,
  DataImage,
} from "./styles";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
import { useTheme } from "styled-components";

const DatesModal = ({ data }) => {
  const [showSiteModal, setShowSiteModal] = useRecoilState(atoms.showSiteModal);
  const [stayLength, setstayLength] = useRecoilState(atoms.stayLength);
  const [cart, setCart] = useRecoilState(atoms.cart);
  const [showCart, setShowCart] = useRecoilState(atoms.showCart);
  const { title, image, price } = data;
  const theme = useTheme();

  const clickContinue = () => {
    setShowCart(true);
    setShowSiteModal(null);
    addLength();
  };
  const addLength = () => {
    let newData = { ...data, ...stayLength };
    setCart(newData);
  };
  return (
    <Wrapper>
      <Header>Please select the dates for your stay</Header>
      <Body>
        <InnerBody>
          <Title>{title}</Title>
          <Details>${price} /per night</Details>
          <DataImage src={image} />
        </InnerBody>
        <InnerBody>
          <DateRange />
        </InnerBody>
      </Body>
      <ButtonWrapper>
        <Button
          text={"Go Back"}
          width={"100%"}
          onClick={() => setShowSiteModal(null)}
        />
        <Button
          text={"Continue"}
          disabled={!stayLength}
          width={"100%"}
          onClick={() => clickContinue()}
        />
      </ButtonWrapper>
    </Wrapper>
  );
};

export default DatesModal;
