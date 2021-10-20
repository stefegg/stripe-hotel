import React, { useEffect, useState } from "react";
import { Wrapper } from "./styles";
import PropTypes from "prop-types";

const Button = ({
  width,
  height,
  text,
  onClick,
  textColor,
  backgroundColor,
  disabled,
  border,
  borderRadius,
  font,
  padding,
}) => {
  return (
    <Wrapper
      width={width}
      height={height}
      onClick={onClick}
      textColor={textColor}
      backgroundColor={backgroundColor}
      disabled={disabled}
      border={border}
      borderRadius={borderRadius}
      font={font}
      padding={padding}
    >
      {text}
    </Wrapper>
  );
};

Button.defaultProps = {
  text: "button",
};

Button.propTypes = {
  height: PropTypes.string,
  width: PropTypes.string,
  onClick: PropTypes.func,
  text: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  border: PropTypes.string,
  borderRadius: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
