import { React, useContext } from 'react'
import TransactionContext from '../../context/transactions/TransactionContext'
import { numberWithCommas } from '../../utils/format'

function IncomeExpenses() {
  const { transactions } = useContext(TransactionContext)

  const income = transactions.filter(trans => (trans.amount > 0)).reduce((a, b) => { return a + b['amount'] }, 0).toFixed(2);
  const expense = (transactions.filter(trans => (trans.amount < 0)).reduce((a, b) => { return a + b['amount'] }, 0) * -1).toFixed(2);

  return (
    <div className="inc-exp-container">
      <div>
        <h4 className="exp-h4">Income</h4>
        <p className="money plus">+Rs {numberWithCommas(income)}</p>
      </div>

      <div>
        <h4 className="exp-h4">Expense</h4>
        <p className="money minus">-Rs {numberWithCommas(expense)}</p>
      </div>
    </div>
  )
}

export default IncomeExpenses