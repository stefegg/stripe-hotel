import styled from "styled-components";

export const Wrapper = styled.div`
  height: 350px;
  width: 450px;
  color: ${({ theme }) => theme.colors.secondary};
  background: ${({ theme }) => theme.colors.tertiary};
  font-size: 32px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  font-family: Lobster;
  border: ${({ theme }) => `2px solid ${theme.colors.headerTextTwo}`};
`;
