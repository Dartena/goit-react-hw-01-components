import PropTypes from "prop-types";
import styles from "./TransactionHistory.module.scss";

const TransactionHistory = ({ trans }) => {
  return (
    <table className={styles.transaction_history}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {trans.map((tran) => {
          return (
            <tr key={tran.id}>
              <td>{tran.type}</td>
              <td>{tran.amount}</td>
              <td>{tran.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  trans: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    }).isRequired
  ),
};

export default TransactionHistory;
