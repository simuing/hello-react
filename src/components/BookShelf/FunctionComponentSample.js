import React from 'react';

/**
 * 8장 함수형 컴포넌트 사용법
 * 
 * 장점
 * 함수형 컴포넌트는 컴포넌트에서 lifecycle, state 등 
 * 불필요한 기능을 제거한 상태이기 때문에 메모리 소모량은 
 * 일반 클래스형 컴포넌트보다 적습니다.
 */

/**
 * @description (1) 순수 함수로 컴포넌트 선언
 */
// function Hello(props) { //
//     return (
//         <div>Hello1 {props.name}</div>
//     )
// }

/**
 * @description (2) ES6 화살표 함수와 비구조화 할당 문법으로 컴포넌트 선언
 */
// const Hello = ({name}) => {
//     return (
//         <div>Hello2 {name}</div>
//     )
// }

/**
 * @description (3) ES6 화살표 함수와 비구조화 할당 문법으로 컴포넌트 선언
 * 중괄호 생략 버전
 */
const Hello = ({name}) => (
    <div>Hello3 {name}</div>
)

export default Hello;