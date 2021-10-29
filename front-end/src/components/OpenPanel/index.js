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
  ImageWrapper,
  ImageLead,
} from "./styles";
import { Button, CartModal, DatesModal, ImageModal } from "../index";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";
import { useTheme } from "styled-components";

const OpenPanel = ({ data }) => {
  const { title, body, price, images, id } = data;
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
        <ImageWrapper>
          <RoomImage
            src={images[id]}
            onClick={() => setShowSiteModal(<ImageModal data={data} />)}
          />
          <ImageLead>Click image to see more room photos</ImageLead>
        </ImageWrapper>
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
