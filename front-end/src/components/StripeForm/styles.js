import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.span`
  text-align: start;
  margin-top: 0px;
  font-size: 18px;
`;

export const SubHeader = styled.span`
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  margin-top: 16px;
  margin-bottom: 24px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 12px;
  display: flex;
  justify-content: center;
  height: 40px;
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
