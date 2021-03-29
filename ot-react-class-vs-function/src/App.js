import React, { Component, useState, useEffect } from 'react';
import './App.css';

function App() {
  let [funcShow, setFuncShow] = useState(true);
  let [classShow, setClassShow] = useState(true);
  return (
    <div className="container">
      <h1>Hello World</h1>

      <input type="button" value="remove func" onClick={()=>{
        setFuncShow(false);
      }}></input>
      <input type="button" value="remove comp" onClick={()=>{
        setClassShow(false);
      }}></input>

      {funcShow ? <FuncComp initNumber={2}></FuncComp> : null}
      {classShow ? <ClassComp initNumber={2}></ClassComp> : null}
    </div>
  );
}

/* 함수형 컴포넌트 */
// props(인자)로 데이터를 받는다.
// 간단한 표현식에 사용했었지만, hook(useState, useEffect,...)에 의해 다양한 표현식에 사용이 가능해졌다.
// React.useState로 state를 사용할 수 있다.
// React.useEffect로 
let funcStyle = 'color:skyblue';
let funcId = 0;
function FuncComp(props) {
  // (1) 인자로 출력하는 방식
  // let number = props.initNumber;

  // (2) useState()를 활용하여 출력하는 방식
  // useState()를 쓰면 무조건 배열이 리턴된다.
  let numberState = useState(props.initNumber);
  let number = numberState[0];    //state
  let setNumber = numberState[1]; //setState

  // 간단하게 선언된 date state 정보
  let [_date, setDate] = useState((new Date()).toString());
  
  // side effect 함수이다.
  // 
  useEffect(()=>{
    console.log('%cfunc => useEffect'+(++funcId), funcStyle);
    document.title = number + ' : ' + _date; //useEffect 예시
    return function() {
      console.log('%cfunc => useEffect return'+(++funcId), funcStyle);
    }
  });

  // 감시 대상을 넘기면 원하는 이벤트를 감시할 수 있다.
  useEffect(()=>{
    console.log('%cfunc => useEffect number'+(++funcId), funcStyle);
    document.title = number; //useEffect 예시
  }, [number]);

  useEffect(()=>{
    console.log('%cfunc => useEffect _date'+(++funcId), funcStyle);
    document.title = _date; //useEffect 예시
  }, [_date]);

  // 두 번째 인자를 빈 배열로 넘기면 초기에만 실행하고 이후에는 실행하지 않는다.
  // componentDidMount로 사용할 수 있다.
  useEffect(()=>{
    console.log('%cfunc => useEffect componentDidMount'+(++funcId), funcStyle);
    document.title = _date; //useEffect 예시
  }, []);
  
  // debugger;
  console.log('%cfunc => render'+(++funcId), funcStyle);
  return (
    <div className="container">
      <h2>function style component</h2>
      <p>Number : {number}</p>
      <p>Data : {_date}</p>
      <input type="button" value="random" onClick={()=>{
        setNumber(Math.random())
      }}></input>
      <input type="button" value="date" onClick={()=>{
        setDate((new Date()).toString())
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

  // componentWillMount는 리액트17부터 지원되지 않으며, 생성자로 대체하기를 권장한다.
  // componentWillMount() {
  //   console.log('%cclass => componentWillMount', 'color:red');
  // }

  // shouldComponentUpdate는 컴포넌트에 변화가 생길 경우 실행되는 함수이다.
  // true로 return할 경우 render()가 실행된다.
  shouldComponentUpdate() {
    console.log('%cclass => shouldComponentUpdate', 'color:red');
    return true;
  }

  componentDidMount() {
    console.log('%cclass => componentDidMount', 'color:red');
  }
  
  componentWillUnmount() {
    console.log('%cclass => componentWillUnmount', 'color:red');
  }
  render() {
    console.log('%cclass => render', 'color:red');
    return (
      <div className="container">
        <h2>class style component</h2>
        <p>Number : {this.state.number}</p>
        <p>Data : {this.state.date}</p>
        <input type="button" value="random" onClick={()=>{
          this.setState({
            number: Math.random()
          })
        }}></input>
        <input type="button" value="date" onClick={()=>{
          this.setState({
            date: (new Date()).toString()
          })
        }}></input>
      </div>
    )
  }
}

export default App;
