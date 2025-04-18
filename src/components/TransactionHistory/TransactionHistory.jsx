import React from "react";
import styles from "./TransactionHistory.module.css";

const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.table}>
      <thead className={styles.head}>
        <tr>
          <th className={styles.column}>Type</th>
          <th className={styles.column}>Amount</th>
          <th className={styles.column}>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id} className={styles.row}>
            <td className={styles.cell}>{type}</td>
            <td className={styles.cell}>{amount}</td>
            <td className={styles.cell}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
