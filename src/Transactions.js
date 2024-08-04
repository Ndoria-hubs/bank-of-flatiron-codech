import React from "react";
import ReactDOM from "react-dom";
import GetTransactions from "./GetTransactions";


// search bar
// const SearchTrans = () => {
//     return (
//      <input type="text" placeholder="Search..."/>,
//      <button> Search Transaction </button>
//     )
// }


// add new task button
// const AddNewTaskButton = (e) => {


//     return (
//      <button className = "addTransButton" onClick={POST}>Add New Transaction</button>
//     )
// }



// list of transactions

    const TransObject = ({ transactionList}) => {
        return (
            <ul>
                {transactionList.map((transaction) => (
                    <li key={transaction.id}>
                        <p>Date : {transaction.date}</p>
                        <p>Description : {transaction.description}</p>
                        <p>Amount : {transaction.amount}</p>
                    </li>
                ))}
            </ul>
        )
    }

   const HandleTransList = () => {
    return (
        <div>
            <h2>Transaction List</h2>
            <TransObject transactionList= {transactionList}/>
        </div>
    )
} 


export default HandleTransList;