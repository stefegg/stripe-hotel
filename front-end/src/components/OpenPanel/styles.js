import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  border: 1px solid black;
  margin: 20px 0px;
  border-radius: 4px;
`;

export const Header = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid black;
  padding: 12px;
`;

export const Body = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: row;
`;

export const Icon = styled.img`
  height: 24px;
  width: 24px;
  background: pink;
  border-radius: 50%;
`;

export const RoomImage = styled.img`
  width: 250px;
  max-heigth: 166px;
`;

export const DetailWrap = styled.ul`
  width: 40%;
`;

export const DetailItem = styled.li`
  margin-bottom: 6px;
  font-style: italic;
  &:last-child {
    margin-bottom: 0px;
  }
`;

export const PriceWrap = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 12px;
  padding-bottom: 24px;
  width: 30%;
  flex-direction: column;
  align-items: center;
`;
