import React from 'react'
import AddTransaction from './AddTransaction';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './TransactionList';

function Expense() {
    document.body.style.backgroundColor = "#f7f7f7";
    
    return (
        <div className="container my-3" >
            <div className="d-flex justify-content-center align-items-center flex-column">
                <h1 className="my-3">Expense Tracker</h1>
                <Balance />
            </div>

            <IncomeExpenses />

            <div className="d-flex justify-content-between">
                <AddTransaction />
                <TransactionList />
            </div>
        </div>
    )
}

export default Expense