import { React, useContext } from 'react'
import TransactionContext from '../../context/transactions/TransactionContext'
import { numberWithCommas } from '../../utils/format'

function Balance() {
    const { transactions } = useContext(TransactionContext)
    const balance = transactions.reduce((a, b) => { return a + b['amount'] }, 0).toFixed(2);

    return (
        <>
            <h4 className="exp-h4">Your Balance</h4>
            <h1 className="exp-h1">Rs {numberWithCommas(balance)}</h1>
        </>
    )
}

export default Balance