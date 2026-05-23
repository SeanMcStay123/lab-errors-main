'use strict';

import { readFileSync } from 'fs';

const aboutStore = {
  getAppInfo() {
    const data = JSON.parse(readFileSync('./models/about-store.json', 'utf8'));
    return data.employees;
  },
};

export default aboutStore;