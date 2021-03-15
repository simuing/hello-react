import React from 'react';
import { Route } from 'react-router-dom';
import {
  Home,
  About,
  Posts
} from 'pages';
// } from 'pages/index.async.js'; //라우트 코드 스플리팅
import Menu from 'components/Menu';

const App = () => {
  return (
    <div>
      <Menu/>
      <Route path="/" component={Home}/>
      <Route path="/about/:name?" component={About}/>
      <Route path="/posts" component={Posts}/>
    </div>
  )
}

export default App;