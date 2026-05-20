'use strict';

import express from 'express';
import logger from "./utils/logger.js";
import start from './controllers/start.js';
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';

const router = express.Router();

router.get('/', start.createView);
router.get('/dashboard', dashboard.createView);
router.get('/about', about.createView);

export default router;