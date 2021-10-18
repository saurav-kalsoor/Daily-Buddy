import React from 'react'

function IncomeExpenses() {
  return (
    <div className="inc-exp-container">
      <div>
        <h4 className="exp-h4">Income</h4>
        <p className="money plus">+Rs 0.00</p>
      </div>

      <div>
        <h4 className="exp-h4">Expense</h4>
        <p className="money minus">-Rs 0.00</p>
      </div>
    </div>
  )
}

export default IncomeExpenses