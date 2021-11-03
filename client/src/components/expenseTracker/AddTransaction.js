import { React, useContext, useState } from "react";
import TransactionContext from '../../context/transactions/TransactionContext'
import { useAlert } from 'react-alert'

function AddTransaction() {
    const { addTransaction } = useContext(TransactionContext);
    const alert = useAlert();

    const [transaction, setTransaction] = useState({
        text: "",
        amount: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await addTransaction(transaction.text, transaction.amount);
            alert.success("Added Successfully")
        } catch (error) {
            // Error for non feasible or large numbers
            alert.error("Enter Correct Amount")
        }
        setTransaction({
            text: "",
            amount: ""
        })
    };

    const onChange = (e) => {
        setTransaction({ ...transaction, [e.target.name]: e.target.value });
    };

    return (
        <div className="add-trn-box">
            <h3 className="exp-h3">Add new transaction</h3>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="desc">Text</label>
                    <input type="text" name="text" className="form-control form-input-fields" id="desc" placeholder="Enter Description" value={transaction.text} onChange={onChange} required minLength={3} maxLength={25} />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="amount">Amount</label>
                    <input type="number" name="amount" className="form-control form-input-fields" id="amount" placeholder="0" value={transaction.amount} onChange={onChange} />
                </div>

                <button type="submit" className="exp-btn">Add</button>
            </form>
        </div>
    )
}

export default AddTransaction