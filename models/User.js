const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email: String,
    password: String,
    isLoggedIn: {type: Boolean, default: false}
},{timestamps: true})

const UserModal = mongoose.model('UserModal', UserSchema);

module.exports = UserModal;
