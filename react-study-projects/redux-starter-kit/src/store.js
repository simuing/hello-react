import { applyMiddleware, createStore } from 'redux';
import modules from './modules';

import { createLogger } from 'redux-logger';
import penderMiddleware from 'redux-pender';


const logger = createLogger();

const store = createStore(modules, applyMiddleware(logger, penderMiddleware()))
// const store = createStore(modules, applyMiddleware(penderMiddleware()))

export default store;