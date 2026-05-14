import logger from "./utils/logger.js";

'use strict';

import express from 'express';

const app = express();
const port = 3000;

app.get('/', (request, response) => response.send('Welcome to the Playlist app!'));

app.listen(port, () => logger.info(`Your app is listening on port ${port}!`));

