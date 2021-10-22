import styled from "styled-components";

export const Body = styled.div`
  display: grid;
  grid-template-columns: 7fr 3fr;
  height: calc(100vh - 100px);
  background: #d9ddee;
`;

export const LeftPane = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 60px;
  max-height: 100%;
  overflow: scroll;
  overflow-x: hidden;
`;

export const RightPane = styled.div`
  height: calc(100vh - 100px);
  background: #e6e8ec;
`;
