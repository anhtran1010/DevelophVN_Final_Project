import express from 'express';

import fetchController from '../controller/fetch-controller';

var router = express.Router();

router.get('/school-data', fetchController.fetchData);

export default router;