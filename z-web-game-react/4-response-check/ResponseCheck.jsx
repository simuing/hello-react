import React, { Component } from 'react';

class ResponseCheck extends Component {
    state = {
        state: 'waiting',
        message: '클릭해서 시작하세요.',
        result: [],
    }

    onClickScreen = () => {
        
    }

    renderAverage = () => {
        const { result } = this.state;
        return result.length === 0 
        ? null 
        : <div>평균 시간: {result.reduce((a, c)=> a + c)/result.length}ms</div>
    }

    render() {
        const { state, message, result } = this.state;
        <>
            <div
                id="screen" 
                className={state} 
                onClick={this.onClickScreen}
            >
                {message}
            </div>

            {/* 삼항연산자로 조건문 표현 */}
            {
                result.length === 0 
                ? null 
                : <div>평균 시간: {result.reduce((a, c)=> a + c)/result.length}ms</div>
            }

            {/* 조건연산자로 조건문 표현 */}
            {
                result.length === 0 
                && <div>평균 시간: {result.reduce((a, c)=> a + c)/result.length}ms</div>
            }

            {/* 조건문 함수로 표현 */}
            {this.renderAverage()}
            
        </>
    }
}

export default ResponseCheck;