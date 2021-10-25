import styled from "styled-components";

export const Body = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  height: calc(100vh - 99px);
  background: ${({ theme }) => theme.colors.tertiary};
`;

export const LeftPane = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-height: 100%;
  overflow: scroll;
  overflow-x: hidden;
`;

export const RightPane = styled.div`
  height: calc(100vh - 100px);
  background: ${({ theme }) => theme.colors.headerOne};
`;
