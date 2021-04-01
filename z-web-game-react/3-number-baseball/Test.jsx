import React, {  PureComponent, memo } from 'react';


/* (1) PureComponent 설명 */

// Component는 setState마다 렌더링이 다시 된다.
// shouldComponentUpdate 로 렌더링이 다시 되는 경우를 지정할 수 있다.

// PureComponent는 위 기능을 자동으로 구현해준 컴포넌트이다.
// 불변성을 지키지 않고 원본을 수정하는 경우 PureComponent도 인지하지 못한다.

// Component, PureComponent 모두 state의 불변성을 지켜주어야 한다.

// class Test extends PureComponent {
//     state = {
//         counter: 0,
//     };

//     onClick = () => {
//         this.setState({});
//     };

//     shouldComponentUpdate(nextProps, nextState, nextContext) {
//         //
//     }

//     render() {
//         console.log('렌더링', this.state);
//         return (
//             <div>
//                 <button onClick={this.onClick}>클릭</button>
//             </div>
//         )
//     }
// }


/* (2) memo 설명 */

// Hooks에서는 Component+shouldComponentUpdate 와 PureComponent 대신 
// memo를 사용하여 성능 최적화를 할 수 있다.

// React {memo}는 메모이제이션을 뜻한다.
// 컴포넌트의 화살표 함수를 memo()로 감싸서 사용한다.

// 자식 컴포넌트가 모두 PureComponent나 Hooks+memo로 이뤄져 있으면
// 부모 컴포넌트도 사용할 수 있다.

// const Test = memo(({ testInfo }) => {
//     return (
//         <div>{testInfo.result}</div>
//     )
// })

/* (3) 3-13. props와 state 연결하기 */
const Test = memo(({ testInfo }) => {
    // testInfo는 부모가 넘긴 state정보이다.
    // 자식 컴포넌트 Test는 부모의 state정보를 바꾸면 안된다. ex) testInfo.result = '1';
    // 자식 컴포넌트의 state를 선언하여 Hooks로 받아 생성하고 사용하는 것이 좋다.
    const [result, setResult] = useState(testInfo.result);

    const onClick = () => {
        setResult('1');
    }

    return (
        <React.Fragment>
            <div>{testInfo.result}</div>
            <div onClick={onClick}>{result}</div>
        </React.Fragment>
    )
})


export default Test;