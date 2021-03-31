
## z-react-game
인프런 『웹 게임을 만들며 배우는 React』 공부 기록입니다.

<br/>

#### 1.구구단 Note
- constructor를 생략해서 써도 된다.
- 생략해서 쓰는 경우 this.state가 아닌 state로 선언한다.

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

- 클래스형과 함수형의 state 선언 차이
- 클래스형
    - 클래스형은 한번에 선언하는 것이 좋다.
- 함수형
    - 리액트 Hooks로 한 컴포넌트 안에 하나하나 따로 선언하는 것이 좋다.
    - 비구조화 할당 방식을 활용하면 간단하게 선언할 수 있다.
    - state 초기 값은 React.useState([초기값])으로 설정한다.

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


- 클래스형과 함수형의 ref 사용 차이
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

<br/>

#### 3.숫자야구 Note

<br/>

#### 4.반응속도체크 Note

<br/>

#### 5.가위바위보 Note

<br/>

#### 6.로또 Note





