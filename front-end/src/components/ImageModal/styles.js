import styled from "styled-components";

export const Wrapper = styled.div`
  height: 70vh;
  width: 70vw;
  background: red;
  border-radius: 4px;
  padding: 40px 20px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
`;

export const CloseIcon = styled.div`
  height: 24px;
  width: 24px;
  background: white;
  cursor: pointer;
  border-radius: 50%;
  position: absolute;
  right: 16px;
  top: 8px;
`;

export const MarqueeImagine = styled.img`
  max-width: 90%;
  max-height: 80%;
  margin-top: 18px;
  object-fit: cover;
  border-radius: 4px;
`;

export const ImageRow = styled.div``;

export const PreviewImage = styled.img`
  height: 24px;
  width: 24px;
`;
