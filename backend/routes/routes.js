import express from 'express';
import { getSchool, postReviews } from '../controller/routes';
import { createAccount, login } from '../controller/users'

const router = express.Router();

router.get('../controller/routes', getSchool);
router.post('../controller/users', createAccount);
router.get('../controller/users', login)
router.post('../controller/routes', postReviews);

export default router;