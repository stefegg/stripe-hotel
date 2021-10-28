import styled from "styled-components";

export const Body = styled.div`
  display: ${({ showCart }) => (showCart ? "grid" : "flex")};
  grid-template-columns: 7fr 3fr;
  height: calc(100vh - 110px);
  background: ${({ theme }) => theme.colors.tertiary};
`;

export const LeftPane = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: ${({ showCart }) => (showCart ? "0px" : "0px 80px 40px 80px")};
  max-height: 100%;
  overflow: scroll;
  overflow-x: hidden;
  width: 100%;
`;

export const RightPane = styled.div`
  height: calc(100vh - 100px);
  background: ${({ theme }) => theme.colors.headerOne};
`;
