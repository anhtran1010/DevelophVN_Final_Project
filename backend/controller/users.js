import express from 'express';
// eslint-disable-next-line no-unused-vars
import mongoose from 'mongoose';
import users from '../models/users';

const router = express.Router();

export const createAccount = (req, res) => {
    req.users.insertOne(users,(err,collection) => {
        if(err){
            throw err;
        }
        console.log("Record Inserted Successfully");
    });

    return res.redirect('main.htm');
}
  
export const login = (req, res) => {
    const { username, password } = req.body;
    try {
        const user = users.find({username, password});
                
        res.status(200).json(user);
    } catch (err) {
        res.status(401).json({ success: false, err: err.message });
    }
}

module.exports = router;