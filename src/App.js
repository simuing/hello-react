import React from 'react';
// import logo from './logo.svg';
import './App.css';
// import MyComponent from './MyComponent'; //MyComponent 파일을 불러옵니다.
import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';

function App() {
  return ( 
    //3장 컴포넌트 생성
    // <MyComponent name={3} age={{age:12, k:11}}></MyComponent>

    //4장 이벤트 헨들링
    // <EventPractice/>

    //5장 DOM에 이름 달기
    <ValidationSample/>
  );
}

export default App;