import styled from "styled-components";

export const Body = styled.div`
  display: grid;
  grid-template-columns: 70% 30%;
  height: calc(100vh - 100px);
`;

export const LeftPane = styled.div`
  background: red;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  max-height: 100%;
  overflow: scroll;
`;

export const RightPane = styled.div`
  height: calc(100vh - 100px);
  background: blue;
`;
