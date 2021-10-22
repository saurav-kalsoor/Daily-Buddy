import TransactionContext from "./TransactionContext"
import { React, useState } from "react";
import TransactionService from "../../services/TransactionService";

function TransactionState(props) {

    const [transactions, setTransactions] = useState([]);
    const mySort = (a, b) => a.date < b.date ? 1 : -1; // trasactions sorted in decreasing manner

    // Get all transactions
    const getTransactions = async () => {
        const json = await TransactionService.getAllTransactions()
        setTransactions(json.sort(mySort))
    }

    // Add a transaction
    const addTransaction = async (text, amount) => {
        const json = await TransactionService.addNewTransaction(text, amount)
        setTransactions(transactions.concat(json).sort(mySort))
    }

    // Delete a transaction
    const deleteTransaction = async (_id) => {
        await TransactionService.deleteThisTransaction(_id)
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