import React, { useState, useRef, useEffect } from 'react';

// 클래스의 경우 라이프 사이클 간단 정리
// constructor -> render -> ref -> componentDidMount
// -> (setState/props 바뀔때 -> shouldComponentUpdate(true) -> render -> componentDidUpdate)
// 부모가 나를 없앨 때 -> componentWillUnmount -> 소멸

const rspCoords = {
    바위: '0',
    가위: '-142px',
    보: '-284px',
}

const scores = {
    가위: 1,
    바위: 0,
    보: -1,
}

const RSP = () => {
    const [result, setResult] = useState('');
    const [imgCoord, setImgCoord] = useState(0);
    const [score, setScore] = useState(0);
    const interval = useRef();

    useEffect(() => { // componentDidMount, componenetDidUpdate 역할(1대1 대응은 아님)
        interval.current = setInterval(changeHand, 100);
        return () => { // componentWillUnmount 역할
            clearInterval(interval.current);
        }
    }, [imgCoord]);

    const changeHand = () => {
        if (imgCoord === rspCoords.바위) {
            setImgCoord(rspCoords.가위)
        } else if (imgCoord === rspCoords.가위) {
            setImgCoord(rspCoords.보)
        } else if (imgCoord === rspCoords.보) {
            setImgCoord(rspCoords.바위)
        }
    }

    const onClickBtn = (choice) => () => {
        clearInterval(interval);
        const myScore = scores[choice];
        const cpuScore = scores[computerChoice(imgCoord)];
        const diff = myScore - cpuScore;
        if (diff === 0) {
            setResult('비겼습니다.');
        } else if ([-1, 2].includes(diff)) {
            setResult('이겼습니다!');
            setScore((prevState) => prevState.score + 1,);
        } else {
            setResult('졌습니다!'); 
            setScore((prevState) => prevState.score - 1,);
        } 
        // 2초 기다리고 다시 시작
        setTimeout(() => {
            interval = setInterval(changeHand, 100);
        }, 2000);
    }

    return (
        <>
            <div id="computer" style={{background: `url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}></div>
            <div>
                <button id="rock" className="btn" onClick={onClickBtn('바위')}>바위</button>
                <button id="scissor" className="btn" onClick={onClickBtn('가위')}>가위</button>
                <button id="paper" className="btn" onClick={onClickBtn('보')}>보</button>
            </div>
            <div>{result}</div>
            <div>현재 {score}점</div>
        </>
    )
}

export default RSP;