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
  const { images, id } = data;
  const theme = useTheme();
  const [showSiteModal, setShowSiteModal] = useRecoilState(atoms.showSiteModal);
  const [mainImage, setmainImage] = useState(images[id]);
  return (
    <Wrapper>
      <CloseIcon onClick={() => setShowSiteModal(null)}>X</CloseIcon>
      <MarqueeImagine src={mainImage} />
      <ImageRow>
        {images.map((image, idx) => (
          <PreviewImage
            src={image}
            key={idx}
            onClick={() => setmainImage(image)}
          />
        ))}
      </ImageRow>
    </Wrapper>
  );
};

export default ImageModal;
