import styled from "styled-components";

export const Wrapper = styled.button`
  width: ${({ width }) => (width ? width : "120px")};
  height: ${({ height }) => (height ? height : "40px")};
  color: ${({ textColor }) => (textColor ? textColor : "#fff")};
  background: ${(props) => {
    if (props.disabled) {
      return `#e0e0e0`;
    } else if (props.backgroundColor && !props.disabled) {
      return props.backgroundColor;
    } else {
      return `#5c7eec`;
    }
  }};
  outline: none;
  text-decoration: none;
  display: flex;
  align-items: center;
  justify-content: center;
  font: ${({ font }) =>
    font ? `${font} Roboto Condensed` : "500 16px Roboto Condensed"};
  cursor: ${({ disabled }) => (disabled ? "auto" : "pointer")};
  border: ${({ border }) => (border ? border : "none")};
  border-radius: ${({ borderRadius }) => (borderRadius ? borderRadius : "4px")};
  padding: ${({ padding }) => (padding ? padding : "0px")};
  box-shadow: 0px 4px 8px -5px #000000;
  &:hover {
    opacity: 0.7;
  }
  &:active {
    opacity: 0.9;
  }
  &:disabled {
    opacity: 1;
  }
`;
