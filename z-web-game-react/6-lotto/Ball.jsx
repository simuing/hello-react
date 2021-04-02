import React, { PureComponent } from "react";

// memo 처럼 컴포넌트를 다른 컴포넌트로 감싸는 것을
// hige order 컴포넌트 (고차 컴포넌트) hoc 라고 부른다.

const Ball = memo(({number}) => {
    let background;
    if (number <= 10) {
        background = 'red';
    } else if (number <= 20) {
        background = 'orange';
    } else if (number <= 30) {
        background = 'yellow';
    } else if (number <= 40) {
        background = 'blue';
    } else {
        background = 'green';
    }

    return (
        <div className="ball" style={{background}}>{number}</div>
    );
})

export default Ball;