import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 100%;
  height: 99px;
  padding: 0px 20px;
  align-items: flex-start;
  justify-content: center;
  overflow: hidden;
  position: relative;
  border-bottom: 1px solid black;
  background: #5c7eec;
`;

export const HeaderOne = styled.h1`
  margin: 0px;
  font-size: 24px;
  font-weight: 500;
  margin-bottom: 12px;
  cursor: pointer;
`;

export const SubHeader = styled.p`
  margin: 0px;
  font-style: italic;
`;
