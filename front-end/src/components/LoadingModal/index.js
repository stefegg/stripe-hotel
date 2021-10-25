import React from "react";
import { Wrapper } from "./styles";
import { useTheme } from "styled-components";

const LoadingModal = () => {
  const theme = useTheme();

  return <Wrapper>Processing...</Wrapper>;
};

export default LoadingModal;
