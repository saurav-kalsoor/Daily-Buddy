import { React, useState } from 'react'

function AddTransaction() {

    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const handleSubmit = (e) => {
        e.preventDefault(); // To avoid form submission and reloading of page
    };

    const onChangeText = (e) => { setText(e.target.value); }
    const onChangeAmount = (e) => { setAmount(e.target.value); }

    return (
        <div className="add-trn-box">
            <h3 className="exp-h3">Add new transaction</h3>

            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label className="form-label" htmlFor="desc">Description</label>
                    <input type="text" className="form-control form-input-fields" id="desc" placeholder="Enter Description" value={text} onChange={onChangeText} required minLength={3} />
                </div>

                <div className="form-group">
                    <label className="form-label" htmlFor="amount">Amount</label>
                    <input type="number" className="form-control form-input-fields" id="amount" placeholder="Enter Amount..." value={amount} onChange={onChangeAmount} />
                </div>

                <button type="submit" className="exp-btn">Add</button>
            </form>
        </div>
    )
}

export default AddTransaction