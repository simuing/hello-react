
#### 구구단 구현 공부노트
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


- 함수를 onSubmit과 같이 빼서 쓸 경우 화살표 함수로만 작성해야한다. function을 넣을 경우 this가 달라져버리기 때문이다. 
- render()는 화살표 함수를 쓰지 않아도 된다.

``` javascript
onSubmit = (e) => {
    e.preventDefault();
    (...)
}
```

- <></> 태그로 감싸면 태그에 감싸지 않고 엘리먼트를 바로 붙일 수 있다.
- 바벨...일 경우 <React.Fragment>로 감싸면 같은 효과를 볼 수 있다.

``` javascript
render() {
    return (
        <React.Fragment>
            <div>
                {this.state.first}곱하기 {this.state.second}는?
            </div>
            <form onSubmit={this.onSubmit}>
                <input type="number" onChange={this.onChange}/>
                <button>입력!</button>
            </form>
            <div>{this.state.result}</div>
        </React.Fragment>
    )
}
(...)
```
