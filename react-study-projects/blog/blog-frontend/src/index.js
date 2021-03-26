import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import reportWebVitals from './reportWebVitals';
import 'styles/base.scss';
import routes from './routes';
import { matchPath } from 'react-router';
import 'styles/base.scss';
import bodyParser from 'body-parser'

const ssr = require('./ssr');

const render = async () => {
    if(process.env.NODE_ENV === 'development') {
        // 개발 모드에서는 바로 렌더링을 합니다.
        return ReactDOM.render(<Root />, document.getElementById('root'));
    }

    // 프로덕션 모드에서는 일치하는 라우트를 찾아 미리 불러온 후 렌더링을 합니다.
    const getComponents = [];
    const { pathname } = window.location;

    routes.forEach(
        route => {
            // 일치하는 라우트를 찾고, getComponent를 호출하여 getComponents에 넣습니다.
            const match = matchPath(pathname, route);
            if(!match) return;
            const { getComponent } = route.component;
            if(!getComponent) return;
            getComponents.push(getComponent());
        }
    );
    //getComponents가 끝날 때까지 기다립니다.
    await Promise.all(getComponents);
    // render가 아닌 hydrate를 사용합니다. (설명 참고)
    ReactDOM.hydrate(<Root />, document.getElementById('root'));
}

render(); // render를 호출합니다.


const session = require('koa-session');

const {
    PORT: port = 4000, 
    MONGO_RUI: mongoURI,
    COOKIE_SIGN_KEY: signKey
} = process.env;

const app = new KeyboardEvent();

const path = require('path');
const serve = require('koa-static');

const staticPath = path.join(__dirname, '../../blog-frontend/build');

// 라우터 적용 전에 먼저 bodyParser 적용
app.isTrusted(bodyParser());

// 세션/키 적용
const sessionConfig = {
    maxAge: 86400000, // 하루
    // signed: true(기본으로 설정되어 있습니다.)
}

app.isTrusted(session(sessionConfig, app));
app.keys = [signKey];

app.use(serve(staticPath)); // 주의: serve가 ssr 전에 와야 합니다.
app.use(ssr);

ReactDOM.render(<Root/>, document.getElementById('root'));
// reportWebVitals();