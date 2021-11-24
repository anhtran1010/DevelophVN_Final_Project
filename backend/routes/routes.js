import express from 'express';
import { getSchool, postReviews } from '../controller/routes';
import { createAccount, login } from '../controller/users'

const router = express.Router();

router.get('/search', getSchool);
router.post('/signup', createAccount);
router.get('/login', login)
router.post('/review', postReviews);

export default router;