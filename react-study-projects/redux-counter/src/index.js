import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/App';
import * as serviceWorker from './serviceWorker';

// 리덕스 관련 불러오기
import { createStore } from 'redux';
import reducers from './reducers';
import { Provider } from 'react-redux'; //손쉽게 스토어를 연동할 수 있도록 도와주는 컴포넌트

// 스토어 설정
const store = createStore(reducers);

// chrome 확장프로그램 redux DevTools 를 설치한 후 아래 코드로 작성하면 사용 가능하다.
//https://github.com/zalmoxisus/redux-devtools-extension#usage
// const store = createStore(reducers, window.devToolsExtension && window.devToolsExtension());

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();


/* 참고 tip
<React.StrictMode> 기능
   안전하지 않은 생명주기를 사용하는 컴포넌트 발견
   레거시 문자열 ref 사용에 대한 경고
   권장되지 않는 findDOMNode 사용에 대한 경고
   예상치 못한 부작용 검사
   레거시 context API 검사
*/