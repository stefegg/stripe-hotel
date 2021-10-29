import styled from "styled-components";
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const Header = styled.span`
  text-align: start;
  margin-top: 0px;
  font-size: 24px;
  font-family: Lobster;
  color: ${({ theme }) => theme.colors.headerTextTwo};
  text-shadow: 1px 1px #000;
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
  color: ${({ theme }) => theme.colors.headerTextOne};
  height: 20px;
  width: 100%;
`;

export const SingleRow = styled.div`
  margin-top: 12px;
  margin-bottom: 6px;
`;

export const CARD_OPTIONS = {
  iconStyle: "solid",
  style: {
    base: {
      iconColor: "#E5E5E5",
      color: `#e5e5e5`,
      fontWeight: 500,
      fontFamily: "Roboto, Open Sans, Segoe UI, sans-serif",
      fontSize: "16px",
      fontSmoothing: "antialiased",
      ":-webkit-autofill": { color: "#fce883" },
      "::placeholder": { color: "#ffdd00" },
    },
    invalid: {
      iconColor: "#cd0909",
      color: "#cd0909",
    },
  },
};
