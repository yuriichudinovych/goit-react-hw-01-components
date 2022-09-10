import styled from "@emotion/styled";

export const PrifileContainer = styled.div`
  /* background-color: red; */
  margin: 0 auto;
  max-width: 500px;
  text-align: center;
  /* padding: 50px; */
  border-radius: 10px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  overflow: hidden;
`;

export const DescriptionContainer = styled.div`
  padding-top: 25px;
`;

export const UserAvatar = styled.img`
  margin-bottom: 15px;
`;

export const Description = styled.p`
  margin-bottom: 15px;
`;

export const StatisticList = styled.ul`
  background-color: #e0e0e0;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  flex-basis: calc(100% / 3);
  padding: 10px;
  border-top: 1px solid black;
  &:not(:last-child) {
    border-right: 1px solid black;
  }
`;
