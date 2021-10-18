import React from 'react'

function TransactionList() {
    return (
        <div className="trn-list-box">
            <h3 className="exp-h3">History</h3>
            <ul id="list" className="list">
                <li className="minus">
                    Cash <span>-Rs 400</span><button className="delete-btn">x</button>
                </li>
            </ul>
        </div>
    )
}

export default TransactionList