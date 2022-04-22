import mongoose from 'mongoose';

const accountSchema = mongoose.Schema({
    account_name: String,
    email: String,
    username: String,
    password: String,
    note: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
});

var account = mongoose.model('account', accountSchema);

export default account;