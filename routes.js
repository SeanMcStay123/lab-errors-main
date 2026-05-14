import logger from "./utils/logger.js";


'use strict';

import express from 'express';

const router = express.Router();

router.get('/', (request, response) => response.send('Welcome to the Playlist app!'));

router.get('/about', (request, response) => response.send('About the Playlist app'));

export default router;