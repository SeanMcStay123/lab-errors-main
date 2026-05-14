'use strict';

import express from 'express';
const router = express.Router();
import logger from "./utils/logger.js";

import start from './controllers/start.js';        // fix: controller → controllers
import dashboard from './controllers/dashboard.js';
import about from './controllers/about.js';

router.get('/', start.createView);                  // fix: '/start' → '/'
router.get('/dashboard', dashboard.createView);
router.get('/about', about.aboutView);              // fix: createView → aboutView

export default router;