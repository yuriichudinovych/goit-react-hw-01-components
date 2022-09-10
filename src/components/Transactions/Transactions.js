import PropTypes from "prop-types";
import { TransactionTable, TableHead, TableBody } from "./Transactions.styled";

const TransactionHistory = ({ items }) => {
  return (
    <TransactionTable className="transaction-history">
      <TableHead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </TableHead>

      <TableBody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <th>{type}</th>
            <th>{amount}</th>
            <th>{currency}</th>
          </tr>
        ))}
      </TableBody>
    </TransactionTable>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.array,
  id: PropTypes.string,
  type: PropTypes.string,
  amount: PropTypes.number,
  currency: PropTypes.string,
};

export default TransactionHistory;
