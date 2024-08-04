import React from "react";
import { useState } from "react";
import TransactionItem from "./TransactionItem";

const TransactionList = () => {
    const [transactions, setTransactions] = useState([]);

    // fetch from local server
    const getTransactions = () => {
         fetch("http://localhost:3001/transactions")
         .then(res => res.json())
         .then(data => setTransactions(data))
         .catch("Error","Error retrieviing transaction List")
    }    
    getTransactions()    
 

    return (
        <div>
            <h2>List of Transactions</h2>
            {transactions.map((transaction) => (
            <TransactionItem key = {transaction.id} date = {transaction.date} description={transaction.description} amount = {transaction.amount} />
     )) }
        </div>
    )
}

export default TransactionList;