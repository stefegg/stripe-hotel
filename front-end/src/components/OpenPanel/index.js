import React from "react";
import {
  Wrapper,
  Header,
  Body,
  RoomImage,
  DetailWrap,
  DetailItem,
  PriceWrap,
  CostAmount,
  CostWrap,
} from "./styles";
import { Button, CartModal, DatesModal, ImageModal } from "../index";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
import { useTheme } from "styled-components";

const OpenPanel = ({ data }) => {
  const { title, image, body, price } = data;
  const [cart, setCart] = useRecoilState(atoms.cart);
  const [showSiteModal, setShowSiteModal] = useRecoilState(atoms.showSiteModal);
  const theme = useTheme();

  const clickAdd = () => {
    if (!cart) setShowSiteModal(<DatesModal data={data} />);
    else setShowSiteModal(<CartModal data={data} />);
  };

  return (
    <Wrapper>
      <Header>{title}</Header>
      <Body>
        <RoomImage
          src={image}
          onClick={() => setShowSiteModal(<ImageModal data={data} />)}
        />
        <DetailWrap>
          {body.map((item, idx) => (
            <DetailItem key={idx}>{item}</DetailItem>
          ))}
        </DetailWrap>
        <PriceWrap>
          <CostWrap>
            <CostAmount>{`$${price}`}</CostAmount> per night
          </CostWrap>
          <Button text={"Select Dates"} onClick={() => clickAdd()} />
        </PriceWrap>
      </Body>
    </Wrapper>
  );
};

export default OpenPanel;
