import React from "react";
import ReactDOM from "react-dom";
import { useState} from "react"

const GetTranscations = () => {
    
    // set original appearance of transaction list
    const [transactions, setTransactions] = useState([])

    // fetch data from API and populate list of transactions here

    fetch("http://localhost:3001/transactions")
    .then(res => res.json())
    .then(data => setTransactions(data))
    .catch( "Error:", "There was an error retrieving transactions")
}

export default GetTranscations;