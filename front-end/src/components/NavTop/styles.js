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
  background: ${({ theme }) => theme.colors.primary};
`;

export const HeaderOne = styled.h1`
  margin: 0px;
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 12px;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const HeaderPrimary = styled.span`
  font-size: 32px;
  color: ${({ theme }) => theme.colors.headerTextOne};
  font-family: Lobster;
  margin-right: 8px;
`;

export const SubHeader = styled.p`
  margin: 0px;
  font-style: italic;
  color: ${({ theme }) => theme.colors.headerTextTwo};
`;
