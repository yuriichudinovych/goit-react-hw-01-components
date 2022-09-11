import styled from "@emotion/styled";

export const FriendItem = styled.li`
  padding: 10px 10px 10px 40px;
  display: flex;
  align-items: center;
  border: 2px solid black;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);

  border-radius: 10px;
  &:not(:last-child) {
    margin-bottom: 15px;
  }
`;

export const FriendName = styled.p`
  font-weight: 700;
  margin-left: 15px;
`;

export const FriendStatus = styled.span`
  display: block;
  width: 30px;
  height: 30px;
  border: 2px solid black;
  border-radius: 50%;
  margin-right: 20px;
  background-color: ${({ status }) => {
    return status ? "green" : "red";
  }};
`;
