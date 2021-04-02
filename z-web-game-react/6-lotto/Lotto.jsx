import React, { useEffect, useState, useRef, useMemo, useCallback } from 'react';

//useMemo: 함수의 리턴 값을 기억한다.
//useCallback: 함수 자체를 기억해둬서 새로 생성되지 않도록 한다.

function getWinNumbers() {
    console.log('getWinNumbers');
    const candidate = Array(45).fill().map((v, i) => i + 1);
    const shuffle = [];
    while (candidate.length > 0) {
        shuffle.push(candidate.splice(Math.floor(Math.random() * candidate.length), 1)[0]);
    }
    const bonusNumber = shuffle[shuffle.length - 1];
    const winNumbers = shuffle.slice(0, 6).sort((p, c) => p - c);
    return [...winNumbers, bonusNumber];
}

const Lotto = () => {
    const lottoNumbers = useMemo(() => getWinNumbers(), []); //배열의 요소가 바뀌면 함수 실행한다.
    const [winNumbers, setWinNumbers] = useState(lottoNumbers); //getWinNumbers를 바로 넣지 않고 memo를 적용하여 사용한다.
    const [winBalls, setWinBalls] = useState([]);
    const [bonus, setBonus] = useState(null);
    const [redo, setRedo] = useState(false);
    const timeouts = useRef([]);

    useEffect(() => {
        for (let i = 0; i < winNumbers.length  -1; i++) {
            timeouts.current[i] = setTimeout(() => {
                setWinBalls((prevBalls) => {[...prevBalls.winBalls, winNumbers[i]]})
            }, (i + 1) * 1000);
        }
        timeouts.current[6] = setTimeout(() => {
            setBonus(winNumbers[6])
            setRedo(true)
        }, 7000);
        return () => {
            timeouts.current.forEach((v) => {
                clearTimeout(v);
            });
        }
    }, [timeouts.current]) // 빈 배열이면 componentDidMount와 동일
    // 배열에 요소가 있으면 componentDidMount, componentDidUpdate 둘 다 수행

    //useCallback을 적용하면 함수 자체를 기억해둬서 새로 생성되지 않도록 한다.
    //useCallback에서 사용하는 state는 두번째 인자에 꼭 넣어주도록 한다.
    onClickRedo = useCallback(() => {
        setWinNumbers(getWinNumbers());
        setWinBalls([])
        setBonus(null);
        setRedo(false);
        timeouts.current = [];
    }, [winNumbers]);

    return (
        <>
            <div>당첨 숫자</div>
            <div id="결과창">
                {winBalls.map((v) => <Ball key={v} number={v} />)}
            </div>
            <div>보너스!</div>
            {bonus && <Ball number={bonus} />}
            {redo && <button onClick={onClickRedo}>한 번 더!</button>}
        </>
    )
}

export default Lotto;