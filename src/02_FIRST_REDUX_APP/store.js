import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from './middleware/logger';

const store = configureStore({ reducer, middleware: [logger({ env: 'development' })] });

export default store;