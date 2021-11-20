import mongoose from 'mongoose';

const usersSchema = new mongoose.Schema({
    email: {
        type: String,
        require: true,
    },
    username: {
        type: String,
        require: true,
    },
    phone: {
        type: String,
        require: true,
    },
    password: {
        type: String,
        require: true,
    }
});

const users = mongoose.model('users', usersSchema);

module.exports = users;