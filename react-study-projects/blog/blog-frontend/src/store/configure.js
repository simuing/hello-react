// 리덕스 모듈을 준비했기 때문에 스토어를 생성하는 함수인
// configure를 구현한다.

// 함수를 따로 만드는 이유는 스토어를 클라이언트에서 생성하지만,
// 추후 서버사이드 렌더링을 할 때 서버에서도 호출해야 하기 때문이다.

import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import penderMiddleware from 'redux-pender';
import * as modules from './modules';

const reducers = combineReducers(modules);
const middlewares = [penderMiddleware()];

// 개발 모드일 때만 Redux Devtools를 적용한다.
const isDev = process.env.NODE_ENV === 'development';
const devtools = isDev && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
const composeEnhancers = devtools || compose;

// preloadedState는 추후 서버사이드 렌더링을 했을 때 전달받는 초기 상태이다.
const configure = (preloadedState) => createStore(reducers, preloadedState, composeEnhancers(
    applyMiddleware(...middlewares)
));

export default configure;