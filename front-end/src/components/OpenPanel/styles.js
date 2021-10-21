import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  margin: 20px 0px;
  border-radius: 4px;
  background: #fff;
`;

export const Header = styled.div`
  height: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #fff;
  padding: 12px;
  background: #5c7eec;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
`;

export const Body = styled.div`
  padding: 12px;
  display: flex;
  flex-direction: row;
  background: #e6e8ec;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  box-shadow: 0 6px 9px rgba(50, 50, 93, 0.06), 0 2px 5px rgba(0, 0, 0, 0.08),
    inset 0 1px 0 #e6e8ec;
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
