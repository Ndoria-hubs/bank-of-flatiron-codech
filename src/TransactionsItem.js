import React from 'react';

function TransactionsItem({ transaction }) {
  return (
    <tr>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>${transaction.amount.toFixed(2)}</td>
    </tr>
  );
}

export default TransactionsItem;