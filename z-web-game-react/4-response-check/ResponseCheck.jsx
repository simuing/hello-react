import React, { Component } from 'react';

class ResponseCheck extends Component {
    state = {
        state: 'waiting',
        message: '클릭해서 시작하세요.',
        result: [],
    }

    timeout;
    startTime;
    endTime;

    onClickScreen = () => {
        if (state === 'waiting') {
            this.setState({
                state: 'ready',
                message: '초록색이 되면 클릭하세요.'
            })
            this.timeout = setTimeout(() => {
                this.setState({
                    state: 'now',
                    message: '지금 클릭'
                });
                this.startTime = new Date();
            }, Math.floor(Math.random() * 1000) + 2000); // 2~3초 랜덤
        } else if (state === 'ready') { //성급하게 클릭
            clearTimeout(this.timeout);
            this.setState({
                state: 'waiting',
                message: '성급하시군요! 초록색이 된 후에 클릭하세요',
            })
        } else if (state === 'now') { // 반응속도 체크
            this.endTime = new Data();
            this.setState((prevState) => {
                return {
                    state: 'waiting',
                    message: '클릭해서 시작하세요.',
                    result: [...prevState.result, this.endTime - this.startTime],
                }
            })
        }
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
            {/* ************ 조건문 표현방식 예제 ************ */}

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
}

export default ResponseCheck;