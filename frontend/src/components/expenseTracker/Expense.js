import { React, useEffect } from 'react'
import { useLocation } from "react-router-dom";
import AddTransaction from './AddTransaction';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import TransactionList from './TransactionList';

function Expense() {

    let location = useLocation();
    useEffect(() => {
        if (location.pathname === '/expense')
            document.body.style.backgroundColor = "#f7f7f7";

        return () => {
            document.body.style.backgroundColor = "transparent";
        };
    }, [location]);

    return (
        <div className="container my-2" >
            <div className="d-flex justify-content-center align-items-center flex-column">
                <h1 className="my-2">Expense Tracker</h1>
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