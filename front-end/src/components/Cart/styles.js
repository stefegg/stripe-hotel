import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 24px 24px;
`;

export const AddWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
`;

export const AddHeader = styled.h1`
  font-size: 24px;
  align-text: center;
  margin-bottom: 24px;
  font-family: Lobster;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const CartImage = styled.img`
  width: 60%;
  border-radius: 4px;
`;

export const CartWrapper = styled.div``;

export const CartHeader = styled.h1`
  font-size: 24px;
  font-family: Lobster;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const RoomTitle = styled.p`
  font-size: 24px;
  font-family: Lobster;
  color: ${({ theme }) => theme.colors.headerTextOne};
`;

export const RoomPrice = styled.p`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.secondary};
`;

export const RoomDetails = styled.p`
  font-style: italic;
  color: ${({ theme }) => theme.colors.headerTextTwo};
`;

export const RoomAmount = styled.p`
  color: ${({ theme }) => theme.colors.headerTextTwo};
  margin: 0px;
`;

export const RoomImage = styled.img`
  width: 100%;
  border-radius: 4px;
`;

export const ButtonWrapper = styled.div`
  margin-top: 24px;
`;
