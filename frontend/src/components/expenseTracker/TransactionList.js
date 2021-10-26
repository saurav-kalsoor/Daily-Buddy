import { React, useContext, useEffect } from 'react'
import InfiniteScroll from "react-infinite-scroll-component";
import { useHistory } from 'react-router-dom'
import TransactionContext from '../../context/transactions/TransactionContext'
import TransactionListItem from './TransactionListItem'
import jsPDF from 'jspdf'
import { numberWithCommas } from '../../utils/format'

function TransactionList() {

    const jsPdfGenerator = () => {
        var doc = new jsPDF('p', 'pt')

        doc.setFontSize(30)
        doc.addFont('roboto')
        var head = 'Expense Tracker'
        var total_width = doc.internal.pageSize.width
        var xOffset = (total_width / 2) - (doc.getStringUnitWidth(head) * doc.internal.getFontSize() / 2);
        doc.text(head, xOffset, 30);
        

        const balance = transactions.reduce((a, b) => { return a + b['amount'] }, 0).toFixed(2);
        const income = transactions.filter(trans => (trans.amount > 0)).reduce((a, b) => { return a + b['amount'] }, 0).toFixed(2);
        const expense = (transactions.filter(trans => (trans.amount < 0)).reduce((a, b) => { return a + b['amount'] }, 0) * -1).toFixed(2);

        doc.setFontSize(20)
        var text = 'Your Balance : ' + numberWithCommas(balance)
        xOffset = (total_width / 2) - (doc.getStringUnitWidth(text) * doc.internal.getFontSize() / 2);
        doc.text(text, xOffset, 70)

        text = 'Income : Rs' + numberWithCommas(income)
        doc.setTextColor('green')
        doc.text(text, xOffset, 100)

        text = 'Expenses : - Rs ' + numberWithCommas(expense)
        doc.setTextColor('red')
        doc.text(text, xOffset, 130)

        doc.setTextColor('black')
        doc.line(10, 150, total_width - 10, 150)

        text = 'History'
        xOffset = (total_width / 2) - (doc.getStringUnitWidth(text) * doc.internal.getFontSize() / 2);
        doc.text(text, xOffset, 170)


        var y = 210

        transactions.map((transaction) => {
            
            doc.setFontSize(16)
            doc.text(20, y, transaction.text).setFont('bold').addFont('roboto')

            if (transaction.amount < 0) {
                doc.setTextColor('red')
                doc.text(total_width - 200, y, "- Rs " + numberWithCommas(Math.abs(transaction.amount).toFixed(2)))
            } else {
                doc.setTextColor('green')
                doc.text(total_width - 200, y, "  Rs " + numberWithCommas(Math.abs(transaction.amount).toFixed(2)))
            }
            doc.setTextColor('black')
            y = y + 15
            doc.setFontSize(12)
            doc.text(20, y, new Date(transaction.date).toLocaleString('en-IN'))

            y = y + 40
        })

        doc.save('generated.pdf')
    }

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

            <button className="exp-btn" onClick={jsPdfGenerator}>Generate PDF</button>
        </div>
    )
}

export default TransactionList