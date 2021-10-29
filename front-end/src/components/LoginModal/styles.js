import styled from "styled-components";

export const Wrapper = styled.div`
  height: 58vh;
  width: 45vw;
  background: ${({ theme }) => theme.colors.tertiary};
  border-radius: 4px;
  overflow: hidden;
  border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 10px 30px;
  height: 90%;
  justify-content: space-around;
  position: relative;
`;

export const Header = styled.span`
  font-size: 32px;
  font-family: Lobster;
  color: ${({ theme }) => theme.colors.headerTextOne};
`;

export const Footer = styled.span`
  margin-top: 16px;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;

export const Create = styled.span`
  cursor: pointer;
  color: ${({ theme }) => theme.colors.headerTextTwo};
  &:hover {
    color: ${({ theme }) => theme.colors.goButton};
  }
`;

export const Icon = styled.div`
  background: ${({ theme }) => theme.colors.tertiaryLight};
  position: absolute;
  height: 24px;
  width: 24px;
  top: 12px;
  right: 24px;
  color: ${({ theme }) => theme.colors.headerTextTwo};
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  cursor: pointer;
  border: ${({ theme }) => `1px solid ${theme.colors.headerTextTwo}`};
  &:hover {
    color: ${({ theme }) => theme.colors.headerTextOne};
    border: ${({ theme }) => `1px solid ${theme.colors.headerTextOne}`};
  }
`;
