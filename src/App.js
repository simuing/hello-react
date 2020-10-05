import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import MyComponent from './BookShelf/MyComponent'; //MyComponent 파일을 불러옵니다.
// import EventPractice from './BookShelf/EventPractice';
// import ValidationSample from './BookShelf/ValidationSample';
// import ScrollBox from './BookShelf/ScrollBox';
// import IterationSample from './BookShelf/IterationSample';
import LifeCycleSample from './BookShelf/LifeCycleSample';

//7장 컴포넌트의 라이프사이클 메서드
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

class App extends Component {

  //7장 컴포넌트의 라이프사이클 메서드
  state = {
    color: '#000000'
  }

  handleClick = () => {
    this.setState({
      color: getRandomColor()
    });
  }

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
      // <IterationSample></IterationSample>

      //7장 컴포넌트의 라이프사이클 메서드
      <div>
        <button onClick={this.handleClick}>랜덤색상</button>
        <LifeCycleSample color={this.state.color}></LifeCycleSample>
      </div>
    );
  }
}

export default App;