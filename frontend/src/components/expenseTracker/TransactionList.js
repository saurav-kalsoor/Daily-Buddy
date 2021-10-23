import { React, useContext, useEffect } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import { useHistory } from 'react-router-dom'
import TransactionContext from '../../context/transactions/TransactionContext'
import TransactionListItem from './TransactionListItem'

function TransactionList() {
    let history = useHistory();
    const { transactions, getTransactions } = useContext(TransactionContext)

    useEffect(() => {
        if (localStorage.getItem("user"))
            getTransactions();
        else
            history.push('/login')
        // eslint-disable-next-line
    }, [])

    return (
        <div className="trn-list-box">
            <h3 className="exp-h3">History</h3>

            {transactions.length === 0 && <h6 className="ms-1">No Transactions to display</h6>}

            {transactions.length !== 0 && <ul className="list">
                <InfiniteScroll dataLength={transactions.length} loader={<h4>Loading...</h4>} height={250}>
                    {transactions.map((transaction) => {
                        return <TransactionListItem transaction={transaction} key={transaction._id} />;

                    })}
                </InfiniteScroll>
            </ul>}

        </div>
    )
}

export default TransactionList