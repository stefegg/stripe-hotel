import React, { useState } from "react";
import { Wrapper, Label, ErrorText, Input, InputWrapper } from "./styles";
import { useTheme } from "styled-components";

const InputField = ({
  label,
  error,
  inputHeight,
  inputWidth,
  borderColor,
  type,
  onBlur,
  onChange,
  value,
}) => {
  const [focused, setFocused] = useState(false);
  const setBlur = (e) => {
    onBlur(e);
    setFocused(false);
  };
  const theme = useTheme();

  return (
    <Wrapper inputWidth={inputWidth}>
      {label && <Label>{label}</Label>}
      <InputWrapper
        borderColor={borderColor}
        error={error}
        focused={focused}
        inputWidth={inputWidth}
      >
        <Input
          autoComplete="nope"
          inputHeight={inputHeight}
          inputWidth={inputWidth}
          onFocus={() => setFocused(true)}
          onBlur={(e) => setBlur(e, onBlur)}
          type={type ? type : "text"}
          onChange={onChange}
          value={value}
        />
      </InputWrapper>
      <ErrorText>{error ? error : null}</ErrorText>
    </Wrapper>
  );
};

export default InputField;
