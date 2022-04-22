import express from 'express';
import mongoose from 'mongoose';

import account from '../models/account.js';

const router = express.Router();

export const getAccounts = async (req, res) => { 
    try {
        const accounts = await account.find();
                
        res.status(200).json(accounts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createAccount = async (req, res) => {
    const accountData = req.body;
    console.log(accountData);
    const newAccount = new account(accountData)
    
    try {
        await newAccount.save();

        res.status(201).json(newAccount);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export default router;