import Axios from './Axios';
import TokenStorage from './TokenService';

const host = process.env.REACT_APP_HOST

const getAllTransactions = async () => {
    const token = TokenStorage.getAccessToken();
    const { data } = await Axios.get(`${host}/api/transaction/fetchalltransactions`, {
        headers: { Authorization: `Bearer ${token}` }
    });
    return data;
}

const addNewTransaction = async (text, amount) => {
    const token = TokenStorage.getAccessToken();
    const { data } = await Axios.post(`${host}/api/transaction/addtransaction`,
        { text, amount },
        {
            headers: { Authorization: `Bearer ${token}` }
        });
    return data;
}

const deleteThisTransaction = async (_id) => {
    const token = TokenStorage.getAccessToken();
    await Axios.delete(`${host}/api/transaction/deletetransaction/${_id}`, {
        headers: { Authorization: `Bearer ${token}` }
    });
}

const TransactionService = { getAllTransactions, addNewTransaction, deleteThisTransaction }
export default TransactionService