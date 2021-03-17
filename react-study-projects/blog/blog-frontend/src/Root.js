// 이름이 App이 아니라 Root인 이유는
// 이 컴포넌트를 클라이ㅓㄴ트 쪽에서만 사용하기 때문이다.

import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';

const Root = () => {
    return (
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    );
}

export default Root;