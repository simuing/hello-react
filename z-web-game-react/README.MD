
## z-react-game
인프런 『웹 게임을 만들며 배우는 React』 공부 기록입니다.
<br/>

#### 1.구구단 Note
- constructor를 생략해서 써도 된다.
- 생략해서 쓰는 경우 this.state가 아닌 state로 선언한다.
- 리액트 JSX 내에선 class를 사용할 수 없다. 대신 className을 사용한다.
- <label>의 for도 사용할 수 없다. 대신 htmlFor을 사용한다.
- 리액트는 setState를 비동기로 모아서 한번에 처리하기 때문에 렌더링이 한번 이뤄지도록 해준다.

> constructor 사용 예시  
``` javascript
class GuGuDan extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            first: Math.ceil(Math.random() * 9),
            second: Math.ceil(Math.random() * 9),
            value: '',
            result: '',
        }
    }
    (...)
}
```

> 생략 예시  
``` javascript
class GuGuDan extends React.Component {
    state = {
        first: Math.ceil(Math.random() * 9),
        second: Math.ceil(Math.random() * 9),
        value: '',
        result: '',
    }
    (...)
}
```
<br/>

- 함수를 onSubmit과 같이 빼서 쓸 경우 화살표 함수로만 작성해야한다. function을 넣을 경우 this가 달라져버리기 때문이다. 
- render() 함수는 화살표 함수를 쓰지 않아도 된다.
- 함수를 따로 빼는 이유는 state가 변경될 경우 render()가 호출되고 내부에 작성된 함수가 새로 생성되기 때문에 성능이 저하되기 때문이다. (랜더링될 때마다 함수 새로 생성 방지)

``` javascript
onSubmit = (e) => {
    e.preventDefault();
    (...)
}
```
<br/>

- <></> 태그로 감싸면 태그에 감싸지 않고 엘리먼트를 바로 붙일 수 있다.
- 빈 태그를 바벨이 처리해줄 수 없는 경우 <React.Fragment>로 감싸면 같은 효과를 볼 수 있다.

> <></> 태그 사용예시
``` javascript
render() {
    return (
        <>
            (...)
        </>
    )
}
```

> <React.Fragment> 사용예시
``` javascript
render() {
    return (
        <React.Fragment>
            (...)
        </React.Fragment>
    )
}
```
<br/>

- ref를 사용하여 DOM에 직접 접근을 할 수 있다.
- document.querySelect('input')과 동일한 효과이다.
> ref 사용예시
``` javascript
onSubmit = (e) => {
    e.preventDefault();
    (...)
    this.input.focus(); // ref가 바라보는 변수로 직접 접근이 가능하다.
}

input; //ref가 바라보는 변수

render() {
    return (
        <React.Fragment>
            <input ref={(c) => { this.input = c; }} type="number" />
        </React.Fragment>
    )
}
```
<br/>

##### 클래스형과 함수형의 state 선언 차이
- 클래스형
    - 클래스형은 state 초기화를 한번에 선언하는 것이 좋다.
    - state가 변경되면 render() 함수가 실행된다.
- 함수형 (리액트에선 Hooks를 활용한 함수형을 추천한다.)
    - 리액트 Hooks로 한 컴포넌트 안에 하나하나 따로 선언하는 것이 좋다.
    - 비구조화 할당 방식을 활용하면 간단하게 선언할 수 있다.
    - state 초기 값은 React.useState([초기값])으로 설정한다.
    - state가 변경되면 함수 전체가 통째로 다시 실행되기 때문에 클래스형보다 조금 더 느릴 수 있다.

> 클래스형 state 선언 예시
``` javascript
state = {
    first: Math.ceil(Math.random() * 9),
    second: Math.ceil(Math.random() * 9),
    value: '',
    result: '',
}
```

> 함수형 state 선언 예시
``` javascript
const GuGuDan = () => {
    const [first, setFirst] = React.useState(Math.ceil(Math.random()));
    const [second, setSecond] = React.useState(Math.ceil(Math.random()));
    const [value, setValue] = React.useState('');
    const [result, setResult] = React.useState('');
}
```
<br/>


##### 클래스형과 함수형의 ref 사용 차이
> 클래스형에서의 ref 사용 예시
``` javascript
input; //ref가 바라보는 변수
onRefInput = (c) => {this.input = c; };
render() {
    return (
        <React.Fragment>
            <input ref={this.onRefInput} type="number" />
        </React.Fragment>
    )
}
```
``` javascript
this.input.focus(); //dom에 접근
```

>함수형에서의 ref 사용 예시
``` javascript
const inputRef = React.useRef(null); //ref가 바라보는 변수
render() {
    return (
        <React.Fragment>
            <input ref={inputRef} type="number" />
        </React.Fragment>
    )
}
```
``` javascript
inputRef.current.focus(); //dom에 접근할 때는 current를 붙이고 사용해야한다.
```
<br/>





<br/>

#### 2.끝말잇기 Note

개발준비
1. 개발환경 세팅
> cd [프로젝트 경로]
> npm init
> npm i react react-dom
<br/>

2. 웹팩 설치하기
- "-D": 개발용으로만 웹팩을 사용할 것임을 명시한다.
- package.json의 "devDependencies"에 버전 정보가 명시된다.
> npm i -D webpack webpack-cli
<br/>

- 프로젝트 경로에 "webpack.config.js" file을 생성하고 빈 모듈을 작성한다.
``` javascript
module.exports = {}
```
<br/>

- 프로젝트 경로에 "client.jsx" file을 생성하고 react, react-dom을 불러오는 소스를 작성한다.
``` javascript
const React = require('react');
const ReactDom = require('react-dom');
```
<br/>

3. 모듈 시스템과 웹팩 설정
- webpack 설정을 작성한다.
> webpack.config.js 작성 예시 (작성중)
``` javascript
```

4. 웹팩으로 빌드하기
5. 구구단 웹팩으로 빌드하기
6. @babel/preset-env와 plugins
7. 끝말잇기 Class 만들기



<br/>

#### 3.숫자야구 Note

<br/>

#### 4.반응속도체크 Note

<br/>

#### 5.가위바위보 Note

<br/>

#### 6.로또 Note





