// Make routes based on controllers/posts.ts

import express from 'express';
import controller from '../controllers/posts';
const router = express.Router();


router.get('/api', controller.getQuran);

export = router;