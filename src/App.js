import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import MyComponent from './BookShelf/MyComponent'; //MyComponent 파일을 불러옵니다.
// import EventPractice from './BookShelf/EventPractice';
// import ValidationSample from './BookShelf/ValidationSample';
// import ScrollBox from './BookShelf/ScrollBox';
import IterationSample from './BookShelf/IterationSample';

class App extends Component {
  render() {
    return ( 
      //3장 컴포넌트 생성
      // <MyComponent name={3} age={{age:12, k:11}}></MyComponent>
  
      //4장 이벤트 헨들링
      // <EventPractice/>
  
      //5장 DOM에 이름 달기
      // <ValidationSample/>

      //5장 컴포넌트에 ref 달기
      // <div>
      //   <ScrollBox ref={(ref) => this.scrollBox=ref}/>
      //   <button onClick={() => this.scrollBox.scrollToBottom()}>맨밑으로</button>
      // </div>

      //6장 데이터 배열을 컴포넌트 배열로 map하기
      <IterationSample></IterationSample>
    );
  }
}

export default App;