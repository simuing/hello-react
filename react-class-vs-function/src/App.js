import React, { Component, useState } from 'react';
import './App.css';

function App() {
  return (
    <div className="container">
      <h1>Hello World</h1>
      <FuncComp initNumber={2}></FuncComp>
      <ClassComp initNumber={2}></ClassComp>
    </div>
  );
}

/* 함수형 컴포넌트 */
// props(인자)로 데이터를 받는다.
// 간단한 표현식에 사용했었지만, hook에 의해 다양한 표현식에 사용이 가능해졌다.
// React.useState 로 state를 사용할 수 있다.
function FuncComp(props) {

  // (1) 인자로 출력하는 방식
  // let number = props.initNumber;

  // (2) useState()를 활용하여 출력하는 방식
  // useState()를 쓰면 무조건 배열이 리턴된다.
  let numberState = useState(props.initNumber);
  let number = numberState[0];    //state
  let setNumber = numberState[1]; //setState

  let dateState = useState((new Date()).toString());
  let _date = dateState[0];
  let setDate = dateState[1];

  // 간단하게 작성하는 방법
  // let [_date, setDate] = useState((new Date()).toString());


  console.log('numberState', numberState);

  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Data : {_date}</p>
      <input type="button" value="random" onClick={()=>{
        setNumber(Math.floor(Math.random()*10))
      }}></input>
    </div>
  )
}

/* 클래스형 컴포넌트 */
// this.props로 데이터를 받는다.
// state가 변경될 때마다 render()된다.
// 다양한 표현식에 사용했었다.
class ClassComp extends Component {
  state = {
    number: this.props.initNumber,
    date: (new Date()).toString()
  }
  render() {
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Data : {this.state.date}</p>
        <input type="button" value="random" onClick={()=>{
          this.setState({
            number: Math.floor(Math.random()*10)
          })
        }}></input>
      </div>
    )
  }
}

export default App;
