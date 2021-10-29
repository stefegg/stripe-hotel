import styled from "styled-components";

export const Wrapper = styled.div`
  width: 42vw;
  background: ${({ theme }) => theme.colors.tertiary};
  border-radius: 4px;
  padding: 20px;
  border: ${({ theme }) => `1px solid ${theme.colors.secondary}`};
  color: ${({ theme }) => theme.colors.secondary};
`;

export const Body = styled.div`
  text-align: center;
`;

export const ButtonWrapper = styled.div`
  margin-top: 24px;
  display: flex;
  padding: 0px 25px;
  flex-direction: row;
  justify-content: space-around;
`;
