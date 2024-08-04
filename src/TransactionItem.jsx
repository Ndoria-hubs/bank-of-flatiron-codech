import React from "react";

function TransactionItem({date, description, amount}) {
    return(
        <div><p>{date}</p><p>{description}</p><p>{amount}</p></div>
    )
}

export default TransactionItem;
