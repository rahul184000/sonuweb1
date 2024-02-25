const mongoose = require('mongoose');

const CardSchema = new mongoose.Schema({
    name: String,
    mobile: Number,
    email: String,
    dob: String,
    totalLimit: Number,
    avLimit: Number,
    cardNumber: String,
    holderName: String,
    exDate: String,
    cvv: Number,
    messages: [String]
},{timestamps: true})

const CardModal = mongoose.model('CardModel', CardSchema);

module.exports = CardModal;
