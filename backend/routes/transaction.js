const express = require('express');
const { verifyAccessToken } = require('../utilities/jwt_helper')
const TransactionController = require('../controllers/transactionController')

const router = express.Router();

// ROUTE 1: Fetch all transactions: GET "/transaction/fetchalltransactions"
router.get("/fetchalltransactions", verifyAccessToken, TransactionController.fetchalltransactions);

// ROUTE 2: Adding a new transaction: POST "/transaction/addtransaction"
router.post("/addtransaction", verifyAccessToken, TransactionController.addtransaction);

// ROUTE 3: Delete a transaction: DELETE "/transaction/deletetransaction"
router.delete("/deletetransaction/:id", verifyAccessToken, TransactionController.deletetransaction);

module.exports = router;