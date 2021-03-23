import React from 'react';
import ReactDOMServer from 'react-dom';
import { StaticRouter } from 'react-router';
import { Provider } from 'react-redux';
import configure from 'store/configure';
import routes from './routes';
import axios from 'axios';
import transit from 'transit-immutable-js';

import App from 'components/App';


const render = (ctx) => {
    const { url, origin } = ctx; // 요청에서 URL을 받아 옵니다.

    // 현재 호스트에 기반을 두도록 baseURL 설정
    axios.defaults.baseURL = origin;

    // 요청이 들어올 때마다 새 스토어를 생성합니다.
    const store = configure();

    const promises = [];

    // 라우트 설정에 반복문을 돌려서 일치하는 라우트를 찾습니다.
    routes.forEach(
        route => {
            const match = matchPath(url, route);
            if(!match) return; // 일치하지 않으면 무시합니다.
            // match가 성공하면 해당 라우트가 가리키는 컴포넌트의 preload를 호출합니다.
            // 그리고 파싱된 params를 preload 함수에 전달합니다.

            const { component } = route;
            const { preload } = component;
            if(!preload) return; // preload가 없으면 무시합니다.
            const { params } = match; // Route의 props로 받는 match와 동일한 객체입니다.
            // preload를 사용하여 얻은 프로미스를 promises 배열에 등록합니다.
            const promise = preload(store.dispatch, params);
            promises.push(promise);
        }
    );

    try {
        // 등록된 모든 프로미스를 기다립니다.
        await Promise.all(promises);
    } catch (e) {
        
    }

    // renderToString은 렌더링된 결과물을 문자열로 만들어 줍니다.
    // 서버에서는 BrowserRouter 대신에 StaticRouter를 사용합니다.
    const html = ReactDOMServer.renderToString(
        <Provider store={store}>
            <StaticRouter location={url}>
                <App/>
            </StaticRouter>
        </Provider>
    );

    const preloadedState = JSON.stringify(transit.toJSON(store.getState())).replace(/</g, '\\u003c');

    return { html, preloadedState };
}

export default render;