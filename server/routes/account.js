import express from 'express';

import { createAccount, getAccounts } from '../controllers/account.js';

const router = express.Router();
import auth from "../middleware/auth.js";

router.get('/', getAccounts);
router.post('/add-account',  createAccount);

export default router;