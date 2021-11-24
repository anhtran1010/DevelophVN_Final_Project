import express from 'express';

import fetchData from '../controller/fetch-controller';

var router = express.Router();

router.get('/school-data', fetchData);

export default router;