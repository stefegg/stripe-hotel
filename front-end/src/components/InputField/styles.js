import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: ${({ inputWidth }) => (inputWidth ? inputWidth : "100%")};
`;

export const Label = styled.span`
  margin-bottom: 8px;
  color: ${({ theme }) => theme.colors.headerTextTwo};
`;

export const ErrorText = styled.span`
  color: red;
  margin-top: 2px;
  font-size: 12px;
  height: 14px;
`;

export const InputWrapper = styled.div`
  width: ${({ inputWidth }) => (inputWidth ? inputWidth : "100%")};
  border-radius: 4px;
  border: ${({ focused, theme, borderColor, error }) => {
    if (borderColor && !focused && !error) {
      return `1px solid ${theme.colors.tertiary}`;
    }
    if (focused && borderColor) {
      return `1px solid ${borderColor}`;
    }
    if (!focused && error) {
      return `1px solid ${theme.colors.headerTextOne}`;
    }
  }};
`;

export const Input = styled.input`
  border-radius: 3px;
  outline: none;
  border: none;
  padding-left: 6px;
  width: calc(100% - 8px);
  height: ${({ inputHeight }) => (inputHeight ? inputHeight : "30px")};
  box-shadow: 0px 3px 4px 0px #363636;
`;
