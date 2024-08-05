import React, { useState } from 'react';
import Header from './Header';
import TransactionList from './TransactionList';
import TransactionForm from './TransactionForm';
import SearchBar from './SearchBar';
import './App.css';


const baseURL = "https://fake-server-render.onrender.com/transactions"

function App() {
  const [transactions, setTransactions] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Fetch transactions when the component is created
  function fetchTransactions() {
    fetch(baseURL)
      .then(response => response.json())
      .then(function(data) {
        setTransactions(data); // Initialize transactions
      })
      .catch(function(error) {
        console.error('Error fetching transactions:', error);
      });
  }

  // Fetch transactions immediately when the component function runs
  if (transactions.length === 0) {
    fetchTransactions();
  }

  // Add a new transaction || POST
  function addTransaction(newTransaction) {
    fetch(baseURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newTransaction),
    })
      .then(response => response.json())
      .then(function(data) {
        setTransactions([...transactions, data])
      })
      .catch(function(error) {
        console.error('Error adding transaction:', error);
      });
  }

  // Filter transactions based on search term
  function handleSearch() {
    if (searchTerm === '') {
      fetchTransactions(); // Reset to full list if search term is empty
    } else {
      const filteredTransactions = transactions.filter((transaction) => {
        return transaction.description.toLowerCase().includes(searchTerm.toLowerCase());
      });
      setTransactions(filteredTransactions);
      setSearchTerm('')
    }
  }

  return (
    <div className="App">
      <h1>Bank of Flatiron</h1>
      <p>Welcome to The Bank of Flatiron</p>
      <Header />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <button onClick={handleSearch}>Search Transactions</button>
      <TransactionForm addTransaction={addTransaction} />
      <TransactionList transactions={transactions} />
    </div>
  );
}

export default App;
