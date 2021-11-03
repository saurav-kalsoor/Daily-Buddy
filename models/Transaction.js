const mongoose = require('mongoose')

const Schema = mongoose.Schema;
const TransactionSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
    },
    text: {
        type: String,
        trim: true,
        required: [true, 'Please add some text']
    },
    amount: {
        type: Number,
        required: [true, 'Please add a positive or negative number']
    },
    date: {
        type: Date,
        default: Date.now
    }
});

const Transaction = mongoose.model('transaction', TransactionSchema);
module.exports = Transaction