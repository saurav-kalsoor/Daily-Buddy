import TransactionContext from "./TransactionContext"
import { React, useState } from "react";

function TransactionState(props) {

    const host = process.env.REACT_APP_HOST
    const [transactions, setTransactions] = useState([]);
    const mySort = (a, b) => a.date < b.date ? 1 : -1; // trasactions sorted in decreasing manner

    // Get all transactions
    const getTransactions = async () => {
        // API call
        const response = await fetch(`${host}/transaction/fetchalltransactions`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setTransactions(json.sort(mySort))
    }

    // Add a transaction
    const addTransaction = async (text, amount) => {
        // API call
        const response = await fetch(`${host}/transaction/addtransaction`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify({ text, amount })
        });
        const json = await response.json();
        setTransactions(transactions.concat(json).sort(mySort))
    }

    // Delete a transaction
    const deleteTransaction = async (_id) => {
        // API call
        await fetch(`${host}/transaction/deletetransaction/${_id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + localStorage.getItem('token')
            }
        });
        const newTransactions = transactions.filter((transaction) => { return transaction._id !== _id })
        setTransactions(newTransactions.sort(mySort))
    }

    return (
        <TransactionContext.Provider value={{ transactions, getTransactions, addTransaction, deleteTransaction }}>
            {props.children}
        </TransactionContext.Provider>
    )
}

export default TransactionState