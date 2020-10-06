import React from 'react';

/**
 * 8장 함수형 컴포넌트 사용법
 * @param {*} props 
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