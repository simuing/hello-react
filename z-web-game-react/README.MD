
## z-react-game
인프런 『웹 게임을 만들며 배우는 React』 공부 기록입니다.
<br/>

### Study Notes
- 클래스형에서 constructor를 생략해서 써도 된다.
- 생략해서 쓰는 경우 this.state가 아닌 state로 선언한다.
- 리액트 JSX 내에선 class를 사용할 수 없다. 대신 className을 사용한다.
- <label>의 for도 사용할 수 없다. 대신 htmlFor을 사용한다.
- 리액트는 setState를 비동기로 모아서 한번에 처리하기 때문에 렌더링이 한번 이뤄지도록 해준다.
- input에 onChange 이벤트를 정의하지 않을 경우 defaultValue로 값을 부여한다.
- this.setState는 render()함수를 호출하기 때문에 render()함수 안에 작성하면 안된다.(무한루프)

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

#### 클래스형과 함수형의 state 선언 차이
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


#### 클래스형과 함수형의 ref 사용 차이
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

#### webpack 개발환경 세팅
[webpack 설명 참고 사이트](https://degurii.tistory.com/96)
[webpack preset-env 설정 참고 사이트](https://github.com/browserslist/browserslist)
[webpack react-fast-refrest 참고 사이트](https://dev-momo.tistory.com/entry/React-Fast-Refresh)
``` cmd
$ npm init
$ npm i react react-dom
$ npm i path
$ npm i -D webpack webpack-cli
$ npm i -D @babel/core @babel/preset-env @babel/preset-react @babel/plugin-proposal-class-properties babel-loader
$ npm i -D react-refresh @pmmmwh/react-refresh-webpack-plugin
$ npm i -D webpack-dev-server
npm i react-refresh/babel

npm i -D react-hot-loader webpack-dev-server
```
<br/>

웹팩으로 빌드하기
- package.json의 "script"에 "dev": "webpack" 을 작성한다.
- webpack-cli 4버전 이상 기준 cli이다.
``` javascript
"scripts": {
    "dev": "webpack serve --env development"
},
```
> npm run dev

<br/>
<br/>

#### PureComponent 설명
- Component는 setState마다 렌더링이 다시 된다.
- shouldComponentUpdate 로 렌더링이 다시 되는 경우를 지정할 수 있다.
- PureComponent는 위 기능을 자동으로 구현해준 컴포넌트이다.
- 불변성을 지키지 않고 원본을 수정하는 경우 PureComponent도 인지하지 못한다.
- Component, PureComponent 모두 state의 불변성을 지켜주어야 한다.
<br/>

#### memo 설명
- Hooks에서는 Component+shouldComponentUpdate 와 PureComponent 대신 
- memo를 사용하여 성능 최적화를 할 수 있다.
- React {memo}는 메모이제이션을 뜻한다.
- 컴포넌트의 화살표 함수를 memo()로 감싸서 사용한다.
- 자식 컴포넌트가 모두 PureComponent나 Hooks+memo로 이뤄져 있으면
- 부모 컴포넌트도 사용할 수 있다.
<br/>

#### createRef 설명
- 클래스형에서 ref를 선언할 때 람다식 대신 inputRef = createRef()로 선언하여 사용할 수 있다.
- 람다식을 사용하는 경우 함수 안에 세밀한 작업이 가능한 장점이 있다.
> createRef() 사용예시
``` javascript
inputRef = createRef();
```
> 람다식 사용예시
``` javascript
inputRef;
onInputRef = (c) => {
    console.log();
    //다른 동작
    this.inputRef = c;
}
```
<br/>

#### Hooks에서의 ref
- useRef()로 선언하면 데이터가 변경되어도 return 부분이 재실행 되지 않는다.
- (state는 바뀌면 리랜더링된다.)
- 클래스형에선 this에 정의되었던 변수를 useRef로 정의한다.
> class component에서의 변수 정의 예시
```javascript
class Test extends Component {
    startTime;
    (...)
    testFunc = () => {
        this.startTime = new Date();
    }
}
```
> Hooks ref 변수 정의 예시
```javascript
const Test = () => {
    const startTime = useRef(null);
    (...)
    testFunc = () => {
        startTime.current = new Date(); //useRef는 current를 쓴다.
    }
}
```
<br/>


#### JSX 조건문 표현 방식
- useRef()로 선언하면 데이터가 변경되어도 return 부분이 재실행 되지 않는다.
- (state는 바뀌면 리랜더링된다.)
- 클래스형에선 this에 정의되었던 변수를 useRef로 정의한다.
> React JSX에서의 조건문 표현방식 예시
```javascript
render() {
    const { result } = this.state;
    <>
        {/* (1) 삼항연산자로 조건문 표현 */}
        {
            result.length === 0 
            ? null 
            : <div>평균 시간: {result.reduce((a, c)=> a + c)/result.length}ms</div>
        }

        {/* (2) 조건연산자로 조건문 표현 */}
        {
            result.length === 0 
            && <div>평균 시간: {result.reduce((a, c)=> a + c)/result.length}ms</div>
        }

        {/* (3) 조건문 함수로 표현 */}
        {this.renderAverage()}

        {/* (4) 즉시실행 함수로 표현 */}
        {(() => {
            if (result.length === 0) {
                return null;
            } else {
                return <>
                    <div>평균 시간: {result.reduce((a, c)=> a + c)/result.length}ms</div>
                </>
            }
        })}
    </>
}
```
> Hooks ref 변수 정의 예시
```javascript
const Test = () => {
    const startTime = useRef(null);
    (...)
    testFunc = () => {
        startTime.current = new Date(); //useRef는 current를 쓴다.
    }
}
```
<br/>

#### 클래스형 라이프 사이클 간단 정리
- 컴포넌트 생성 -> constructor -> render -> ref -> componentDidMount -> (setState/props 바뀔때 -> shouldComponentUpdate(true) -> render -> componentDidUpdate)
- 부모가 나를 없앨 때 -> componentWillUnmount -> 소멸

#### componentWillUnmount()를 활용하여 메모리 누수 방지
- setInterval와 setTimeout를 사용한 경우 컴포넌트가 제거되기 직전에 실행되는 함수인 componentWillUnmount()를 활용하여 clear 해주기!
```javascript
componentWillUnmount() {
    clearInterval(this.interval); 
}
```
<br/>



<br/>
