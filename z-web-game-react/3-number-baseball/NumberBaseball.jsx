import React, { useState } from 'react';

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

const NumberBaseball = () => {
    const [result, setResult] = useState('');
    const [value, setValue] = useState('');
    const [answer, setAnswer] = useState(getNumbers());
    const [tries, setTries] = useState([]);

    const onSubmitForm = (e) => {
         e.preventDefault();
         if(value === answer.join('')) {
             setResult('홈런!')
             setTries((prevTries) => {
                return [...prevTries.tries, { try: value, result: '홈런!' }]
             });
             alert('게임을 다시 시작합니다!');
             setValue('');
             setAnswer(getNumbers());
             setTries([])
         } else {
            const answerArray = value.split('').map((v) => parseInt(v));
            let strike = 0;
            let ball = 0;
            if (tries.length >= 9) {
                setResult(`10번 넘게 틀려서 실패! 답은 ${answer.join(',')}였습니다!`);
                alert('게임을 다시 시작합니다!');
                setValue('');
                setAnswer(getNumbers());
                setTries([])
            } else {
                for (let i = 0; i < 4; i += 1) {
                    if (answerArray[i] === answer[i]) {
                        strike += 1;
                    } else if (answer.includes(answerArray[i])) {
                        ball += 1;
                    }
                }
                setTries((prevState) => [...prevState.tries, { try: value, result: `${strike} 스트라이크, ${ball} 볼입니다.`}]);
                setValue('');
            }
         }
    }

    const onChangeinput = (e) => {
        setValue(e.target.value);
    }

    return (
        <>
            <h1>{result}</h1>
            <form onSubmit={onSubmitForm}>
                <input maxLength={4} value={value} onChange={onChangeinput}/>
            </form>
            <div>시도: {tries.length}</div>
            <ul>
                {tries.map((v, i)=>{
                    return (
                        <Try key={`${i + 1}차 시도 :`} tryInfo={v} />
                    )
                })}
            </ul>
        </>
    )
}

export default NumberBaseball;