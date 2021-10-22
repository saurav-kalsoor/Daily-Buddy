import axios from 'axios';

const host = process.env.REACT_APP_HOST

const getAllTransactions = async () => {
    const { data } = await axios.get(`${host}/api/transaction/fetchalltransactions`, {
        headers: { "Authorization": 'Bearer ' + localStorage.getItem('token') }
    });

    return data;
}

const addNewTransaction = async (text, amount) => {
    const { data } = await axios.post(`${host}/api/transaction/addtransaction`,
        { text, amount },
        {
            headers: {
                'Content-Type': 'application/json',
                "Authorization": 'Bearer ' + localStorage.getItem('token')
            }
        });
    return data;
}
const deleteThisTransaction = async (_id) => {
    await axios.delete(`${host}/api/transaction/deletetransaction/${_id}`, {
        headers: {
            'Content-Type': 'application/json',
            "Authorization": 'Bearer ' + localStorage.getItem('token')
        }
    });
}
const TransactionService = { getAllTransactions, addNewTransaction, deleteThisTransaction }

export default TransactionService