import React from "react";
import ReactDOM from "react-dom";
import TransactionList from "./TransactionList";


// search bar
const SearchTrans = () => {
    return (
     <input type="text" placeholder="Search..."/>,
     <button> Search Transaction </button>
    )
}


// // add new task button
// const AddNewTaskButton = (e) => {}



// list of transactions

    const TransObject = () => {
        return (
            <TransactionList />
        )
    }

export { TransObject }