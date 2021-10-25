import styled from "styled-components";

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  height: 350px;
  padding: 20px 40px;
  width: 450px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border-radius: 4px;
  border: ${({ theme }) => `2px solid ${theme.colors.headerTextTwo}`};
`;

export const Header = styled.h1`
  margin-top: 0px;
  margin-bottom: 0px;
  font-family: Lobster;
  color: ${({ theme }) => theme.colors.headerTextOne};
`;

export const Body = styled.div`
  text-align: center;
  color: ${({ theme }) => theme.colors.secondary};
  font-size: 18px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
