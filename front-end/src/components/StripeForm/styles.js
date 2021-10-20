import styled from "styled-components";
export const Wrapper = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
`;

export const Header = styled.h1`
  margin-top: 0px;
`;

export const SubHeader = styled.h2`
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
`;

export const ErrorField = styled.div`
  text-align: center;
  margin-top: 4px;
  color: red;
  height: 20px;
  width: 100%;
`;

export const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#c4f0ff",
      color: "#fff",
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#87bbfd" },
    },
    invalid: {
      iconColor: "#ffc7ee",
      color: "#ffc7ee",
    },
  },
};
