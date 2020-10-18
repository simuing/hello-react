import React, { Component } from 'react';
import PropType from 'prop-types';
import './Counter.css';

const Counter = ({number, color, onIncrement, onDecrement, onSetColor}) => {
    return (
        <div
            className="Counter"
            onClick={onIncrement}
            onContextMenu={(e) => { //마우스 우클릭, 메뉴 열림 이벤트
                e.preventDefault();
                onDecrement();
            }}
            onDoubleClick={onSetColor}
            style={{
                backgroundColor: color
            }}>
            {number}
        </div>
    )
}

Counter.PropType = { //props 기본 값 설정
    number: PropType.number,
    color: PropType.string,
    onIncrement: PropType.func,
    onDecrement: PropType.func,
    onSetColor: PropType.func
}

Counter.defaultProps = { //함수 미전달시 경고문 출력
    number: 0,
    color: 'black',
    onIncrement: () => console.warn('onIncrement not defined'),
    onDecrement: () => console.warn('onDecrement not defined'),
    onSetColor: () => console.warn('onSetColor not defined')
}

export default Counter;