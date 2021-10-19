const express = require('express');
const createError = require('http-errors')
const router = express.Router();
const Transaction = require("../models/Transaction");
const { verifyAccessToken } = require('../helpers/jwt_helper')
const { transactionSchema } = require('../helpers/validation_schema')

// ROUTE 1: Fetch all transactions: GET "/transaction/fetchalltransactions"
router.get("/fetchalltransactions", verifyAccessToken, async (req, res, next) => {
    try {
        const transactions = await Transaction.find({ user: req.payload.aud });
        res.json(transactions)

    } catch (error) {
        console.error(error.message);
        next(createError.InternalServerError())
    }
});

// ROUTE 2: Adding a new transaction: POST "/transaction/addtransaction"
router.post("/addtransaction", verifyAccessToken, async (req, res, next) => {
    try {

        // Finds the validation errors in this request and wraps them in an object with handy functions
        const result = await transactionSchema.validateAsync(req.body)
        const { text, amount } = result;
        const transaction = new Transaction({
            text, amount, user: req.payload.aud
        })

        // Add transaction
        const savedTransaction = await transaction.save();
        res.json(savedTransaction);

    } catch (error) {
        console.log(error)
        if (error.isJoi)
            return next(createError.BadRequest("Please enter valid text and amount"))
        next(error)
    }
});

// ROUTE 3: Delete a transaction: DELETE "/transaction/deletetransaction"
router.delete("/deletetransaction/:id", verifyAccessToken, async (req, res, next) => {
    try {

        // Find transaction by id, check if present and it should be user's transaction only
        let trans = await Transaction.findById(req.params.id);
        if (!trans)
            throw createError.NotFound()
        if (trans.user.toString() !== req.payload.aud)
            throw createError.Unauthorized()

        // Delete transaction
        trans = await Transaction.findByIdAndDelete(req.params.id)

        res.json({ "Success": "transaction has been deleted", transaction: trans });

    } catch (error) {
        console.error(error.message);
        if(error.status === 404)
            next(createError.NotFound())
        next(createError.InternalServerError())
    }
});

module.exports = router;