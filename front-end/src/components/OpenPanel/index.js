import React from "react";
import {
  Wrapper,
  Header,
  Body,
  RoomImage,
  DetailWrap,
  DetailItem,
  PriceWrap,
} from "./styles";
import { Button, CartModal, DatesModal } from "../index";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";

const OpenPanel = ({ data }) => {
  const { title, image, body, price } = data;
  const [cart, setCart] = useRecoilState(atoms.cart);
  const [showSiteModal, setShowSiteModal] = useRecoilState(atoms.showSiteModal);
  const clickAdd = () => {
    if (!cart) setShowSiteModal(<DatesModal data={data} />);
    else setShowSiteModal(<CartModal data={data} />);
  };

  return (
    <Wrapper>
      <Header>{title}</Header>
      <Body>
        <RoomImage src={image} />
        <DetailWrap>
          {body.map((item, idx) => (
            <DetailItem key={idx}>{item}</DetailItem>
          ))}
        </DetailWrap>
        <PriceWrap>
          {`$${price}`} per night
          <Button text={"Select Dates"} onClick={() => clickAdd()} />
        </PriceWrap>
      </Body>
    </Wrapper>
  );
};

export default OpenPanel;
