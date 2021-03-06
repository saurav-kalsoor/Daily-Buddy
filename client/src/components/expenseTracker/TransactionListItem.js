import { React, useContext } from 'react'
import TransactionContext from '../../context/transactions/TransactionContext'
import { numberWithCommas } from '../../utils/format'
import { useAlert } from 'react-alert'

function TransactionListItem(props) {
    const { deleteTransaction } = useContext(TransactionContext)
    const { text, amount, _id, date } = props.transaction;
    const alert = useAlert();

    const onClickDelete = async () => {
        await deleteTransaction(_id)
        alert.success("Transaction deleted")
    }

    return (
        <li className={"" + amount >= 0 ? "plus" : "minus"}>
            <div>
                <strong>{text}</strong>
                <br />
                {new Date(date).toLocaleString('en-IN')}
            </div>
            
            <div>
                {amount < 0 ? "-" : ""} Rs {numberWithCommas(Math.abs(amount).toFixed(2))}
                <i className="far fa-trash-alt ml-3 del-icon" onClick={onClickDelete}> </i>
            </div>
        </li>
    )
}

export default TransactionListItem