import React, { useState } from 'react';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';
import './App.css';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch transactions when the component is created
  fetch('http://localhost:3000/transactions')
    .then(response => response.json())
    .then(data => setTransactions(data))
    .catch(error => console.error('Error fetching transactions:', error));

  const addTransaction = (newTransaction) => {
    fetch('http://localhost:3000/transactions', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
      .then(response => response.json())
      .then(data => {
        setTransactions([...transactions, data]);
      })
      .catch(error => console.error('Error adding transaction:', error));
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={filteredTransactions} />
    </div>
  );
}

export default App;