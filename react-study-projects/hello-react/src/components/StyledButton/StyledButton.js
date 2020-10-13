import React from 'react';
import styled from 'styled-components';
/*
    styled`...` : ES6의 Tagged Template Literals 문법

    styled-components의 최대장점
    : 자바스크립트 내부에서 스타일을 정의하기 때문에
    자바스크립트와 스타일 사이의 벽이 허물어져
    동적 스타일링이 더욱 편해진다는 것입니다.
*/
//css만 적용한 코드
// const Wrapper = styled.div`
//     border: 1px solid black;
//     display: inline-block;
//     padding: 1rem;
//     border-radius: 3px;
//     &:hover {
//         background: black;
//         color: white;
//     }
// `;
// const StyledButton = ({children, ...rest}) => {
//     return (
//         <Wrapper {...rest}>
//             {children}
//         </Wrapper>
//     );
// };

//js와 css를 모두 적용한 코드
const Wrapper = styled.div`
    border: 1px solid black;
    display: inline-block;
    padding: 1rem;
    border-radius: 3px;
    font-size: ${(props) => props.fontSize};
    ${props => props.big && `
        font-size: 2rem;
        padding: 2rem;
    `}
    &:hover {
        background: black;
        color: white;
    }
`;

const StyledButton = ({children, big, ...rest}) => {
    return (
        <Wrapper font-size="1.25rem" {...rest} big={big}>
            {children}
        </Wrapper>
    );
};

export default StyledButton;