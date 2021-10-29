import styled from "styled-components";

export const Wrapper = styled.div`
  height: 70vh;
  width: 70vw;
  background: ${({ theme }) => theme.colors.tertiaryLight};
  border-radius: 4px;
  padding: 40px 20px 12px 20px;
  display: flex;
  position: relative;
  flex-direction: column;
  align-items: center;
  border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
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
  display: flex;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.headerTextTwo};
  transition: all 0.5s;
  &:hover {
    color: ${({ theme }) => theme.colors.headerTextOne};
  }
`;

export const MarqueeImagine = styled.img`
  max-width: 90%;
  max-height: 70%;
  object-fit: cover;
  border-radius: 4px;
`;

export const ImageRow = styled.div`
  width: 100%;
  display: grid;
  margin: 24px 0px 10px 0px;
  grid-auto-columns: 1fr;
  grid-auto-flow: column;
  grid-column-gap: 18px;
`;

export const PreviewImage = styled.img`
  width: 100%;
  cursor: pointer;
  border-radius: 4px;
  transition: all 0.5s;
  &:hover {
    transform: scale(1.2, 1.2);
  }
`;
