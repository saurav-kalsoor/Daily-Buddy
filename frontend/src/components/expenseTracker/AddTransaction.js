import { React, useContext, useState } from "react";
import TransactionContext from '../../context/transactions/TransactionContext'

function AddTransaction() {
    const { addTransaction } = useContext(TransactionContext);
    
    const [transaction, setTransaction] = useState({
        text: "",
        amount: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault(); // To avoid form submission and reloading of page
        addTransaction(transaction.text, transaction.amount);
        setTransaction({
            text: "",
            amount: ""
        })
        //alert("Added Successfully")
        //props.showAlert("Added Successfully", "success")
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
                    <input type="text" name="text" className="form-control form-input-fields" id="desc" placeholder="Enter Description" value={transaction.text} onChange={onChange} required minLength={3} maxlength={25} />
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