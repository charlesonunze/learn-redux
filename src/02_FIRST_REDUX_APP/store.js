import { configureStore } from '@reduxjs/toolkit';
import reducer from './reducer';
import logger from './middleware/logger';
import func from './middleware/func';

const store = configureStore({ reducer, middleware: [logger({ env: 'development' }), func] });

export default store;