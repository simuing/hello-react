import React, { Component } from 'react';

//this를 쓰지 않는 경우 밖에 선언해도 된다.
//class 내부에 선언할 경우 다른 곳에서 사용하기가 힘들어지는 단점이 있다.
//class 내부에 선언할 경우 화살표 함수로 작성한다.
/**
 * @function getNumbers 숫자 네 개를 겹치지 않고 랜덤하게 뽑는 함수
 * @returns 
 */
function getNumbers() {
    const candidate = [1,2,3,4,5,6,7,8,9];
    const array = [];
    for(let i=0; i<4; i+=1) {
        const chosen = candidate.splice(Math.floor(Math.random() * (9-i)), 1)[0];
        array.push(chosen);
    }
    return array;
}

class NumberBaseball extends Component {
    state = {
        result: '',
        value: '',
        answer: getNumbers(),
        tries: []
    }

    onSubmitForm = (e) => {
         e.preventDefault();
         if(this.state.value === this.state.answer.join('')) {
            this.setState({
                result: '홈런!',
                tries: [...this.state.tries, { try: this.state.value, result: '홈런!' }],
            });
         } else {
            const answerArray = this.state.value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (this.state.tries.length >= 9) {
                this.setState({
                    result: `10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`,
                });
                alert('게임을 다시 시작합니다!');
                this.setState({
                    value: '',
                    answer: getNumbers(),
                    tries: [],
                });
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === this.state.answer[i]) {
                        strike += 1;
                    } else if (this.state.answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                this.setState({
                    tries: [...this.state.tries, { try: this.state.value, result: `${strike} 스트라이크, ${ball} 볼입니다.`}],
                    value: '',
                })
            }
         }
    }

    onChangeinput = (e) => {
        console.log(this.state.answer);
        this.setState({
            value: e.target.value, 
        })
    }

    render() {
        return (
            <>
                <h1>{this.state.result}</h1>
                <form onSubmit={this.onSubmitForm}>
                    <input maxLength={4} value={this.state.value} onChange={this.onChangeinput}/>
                </form>
                <div>시도: {this.state.tries.length}</div>
                <ul>
                    {this.state.tries.map((v, i)=>{
                        return (
                            <Try key={`${i + 1}차 시도 :`} tryInfo={v} />
                        )
                    })}
                </ul>
            </>
        )
    }
}

export default NumberBaseball;