import styled from "styled-components";

export const Wrapper = styled.div`
  background: #e6e8ec;
  height: 65vh;
  width: 65vw;
  border-radius: 8px;
  padding: 20px 60px;
  box-shadow: 0px 4px 8px -5px #000000;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const ButtonWrapper = styled.div`
  margin-top: 12px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 48px;
  justify-content: space-around;
  width: 100%;
`;

export const Body = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  width: 100%;
  padding: 0px 4px;
`;

export const InnerBody = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  &:last-child {
    align-items: end;
  }
`;

export const Header = styled.span`
  font-size: 22px;
  font-weight: 500;
  width: 100%;
  font-style: italic;
`;

export const Title = styled.span`
  font-size: 18px;
  font-weight: 500;
`;

export const Details = styled.span``;

export const DataImage = styled.img`
  max-width: 85%;
  border-radius: 4px;
`;
