import React from 'react';
import { Route } from 'react-router-dom';
import {
  Home,
  About
} from 'pages';

const App = () => {
  return (
    <div>
      {/* <Route exact path="/" component={Home}/> */}
      <Route path="/" component={Home}/>
      
      {/* 파라미터를 받는 첫 번째 방법 - exact로 구분하여 두줄 작성 */}
      {/* <Route exact path="/about" component={About}/>
      <Route path="/about/:name" component={About}/> */}

      {/* 파라미터를 받는 두 번째 방법 - 물음표를 추가하여 한줄로 작성 */}
      <Route path="/about/:name?" component={About}/>
    </div>
  )
}

export default App;