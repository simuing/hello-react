import React from 'react';
import { Route } from 'react-router-dom';
import {
  Home,
  About,
  Posts
} from 'pages';
import Menu from 'components/Menu';

import styles from './App.module.css'; 
console.log(styles); 

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