import React, { Component } from 'react';
// import logo from './logo.svg';
// import classNames from 'classnames';
// import classNames from 'classnames/bind';
// import styles from './App.css';
// import scssStyles from './App.scss';
// import Button from './components/Button';
import StyledButton from './components/StyledButton/StyledButton';

// import MyComponent from './BookShelf/MyComponent'; //MyComponent 파일을 불러옵니다.
// import EventPractice from './BookShelf/EventPractice';
// import ValidationSample from './BookShelf/ValidationSample';
// import ScrollBox from './BookShelf/ScrollBox';
// import IterationSample from './BookShelf/IterationSample';
// import LifeCycleSample from './BookShelf/LifeCycleSample';
// import Hello from './BookShelf/FunctionComponentSample';

//7장 컴포넌트의 라이프사이클 메서드
// function getRandomColor() {
//   return '#' + Math.floor(Math.random() * 16777215).toString(16);
// }

//9장 컴포넌트 스타일링
// const cx = classNames.bind(styles);
// const scssCx = classNames.bind(scssStyles);

/* classNames 사용 예제 */
// classNames('foo', 'bar'); // => 'foo bar'
// classNames('foo', { bar: true }); // => 'foo bar'
// classNames({ 'foo-bar': true }); //=> 'foo-bar'
// classNames({ 'foo-bar': false}); // => ''
// classNames({ foo: true}, { bar: true }); //=> 'foo bar'
// classNames({ foo: true, bar: true}); //=> 'foo bar'
// classNames(['foo', 'bar']); //=> 'foo bar'
// 여러 개의 형식을 동시에 받아 올 수 있습니다.
// classNames('foo', { bar: true, duck: false }, 'baz', { quux: true }); //=> 'foo bar baz quux'
// false, null, 0, undefined 는 무시됩니다.
// classNames(null, false, 'bar', undefined, 0, 1, { baz: null }, ''); //=> 'bar 1'

class App extends Component {

  //7장 컴포넌트의 라이프사이클 메서드
  // state = {
  //   color: '#000000'
  // }

  // handleClick = () => {
  //   this.setState({
  //     color: getRandomColor()
  //   });
  // }

  

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
      // <div>
      //   <button onClick={this.handleClick}>랜덤색상</button>
      //   <LifeCycleSample color={this.state.color}></LifeCycleSample>
      // </div>

      //8장 함수형 컴포넌트
      // <div>
      //   <Hello></Hello>
      // </div>

      //9장 컴포넌트 스타일링 9.1
      // <div>
      //   <div className={[styles.box, styles.box1, styles.blue].join(' ')}></div>
      //   <div className={classNames(styles.box, styles.box2, styles.red)}></div>
      //   <div className={cx('box', 'box3', 'green')}></div>
      //   <div className={[cx('box', 'box4', 'red'),scssCx('box')].join(' ')}></div>
      // </div>

      //9장 컴포넌트 스타일링 9.2 버튼추가
      // <div>
      //   <Button>버튼</Button>
      // </div>

      //9장 컴포넌트 스타일링 9.3 
      <div>
        <StyledButton>버튼</StyledButton>
        <StyledButton big>big 버튼</StyledButton>
      </div>
    );
  }
}

export default App;