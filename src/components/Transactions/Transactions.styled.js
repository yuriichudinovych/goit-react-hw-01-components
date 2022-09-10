import styled from "@emotion/styled";

export const TransactionTable = styled.table`
  text-transform: uppercase;
  border-collapse: collapse;
  margin: 0 auto;
  margin-top: 50px;
  display: block;
  max-width: 800px;
  border-radius: 5px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  outline: none;
`;
export const TableHead = styled.thead`
  background-color: lightblue;
  th {
    padding: 10px;
    width: 250px;
    color: white;
    &:not(:last-child) {
      border-right: 1px solid white;
    }
  }
`;

export const TableBody = styled.tbody`
  tr {
    &:nth-of-type(even) {
      background-color: rgb(0, 128, 0, 0.5);
    }
  }

  th {
    padding: 10px;
    &:not(:last-child) {
      border-right: 1px solid #e0e0e0;
    }
  }
`;
