import React, { useState } from "react";
import {
  Wrapper,
  CloseIcon,
  MarqueeImagine,
  ImageRow,
  PreviewImage,
} from "./styles";
import { useTheme } from "styled-components";
import { useRecoilState } from "recoil";
import atoms from "../../atoms";

const ImageModal = ({ data }) => {
  console.log(data, "-------d");
  const { images, id } = data;
  const theme = useTheme();
  const [showSiteModal, setShowSiteModal] = useRecoilState(atoms.showSiteModal);
  const [mainImage, setmanImage] = useState(images[id]);
  return (
    <Wrapper>
      <CloseIcon onClick={() => setShowSiteModal(null)} />
      <MarqueeImagine src={mainImage} />
      <ImageRow>
        {images.map((image, idx) => (
          <PreviewImage src={image} key={idx} />
        ))}
      </ImageRow>
    </Wrapper>
  );
};

export default ImageModal;
