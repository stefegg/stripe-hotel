import styled from "styled-components";

export const Wrapper = styled.div`
  height: calc(100vh - 130px);
  padding: ${({ page }) => (page === 1 ? "10px 80px" : "10px 40px")};
  overflow: scroll;
  background: ${({ theme }) => theme.colors.tertiaryLight};
  display: flex;
  align-items: center;
  max-width: 100%;
  flex-direction: column;
`;

export const FirstStep = styled.div`
  background: ${({ theme }) => theme.colors.tertiary};
  height: 65vh;
  width: 50vw;
  border-radius: 8px;
  border: ${({ theme }) => `2px solid ${theme.colors.secondary}`};
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const Header = styled.h1`
  font-family: Lobster;
  color: ${({ theme }) => theme.colors.headerTextOne};
  text-shadow: 1px 1px #000;
  margin-top: 12px;
  margin-bottom: 24px;
`;

export const SubHeader = styled.h2`
  font-family: Lobster;
  color: ${({ theme }) => theme.colors.headerTextTwo};
  text-shadow: 1px 1px #000;
  font-size: 22px;
  text-align: center;
  margin: 8px 0px 12px 0px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 12px;
  margin-bottom: 12px;
`;
