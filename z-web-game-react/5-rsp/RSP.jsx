import { url } from 'node:inspector';
import React, { Component } from 'react';

// 클래스의 경우 라이프 사이클 간단 정리
// constructor -> render -> ref -> componentDidMount
// -> (setState/props 바뀔때 -> shouldComponentUpdate(true) -> render -> componentDidUpdate)
// 부모가 나를 없앨 때 -> componentWillUnmount -> 소멸

class RSP extends Component {
    state = {
        result: '',
        imgCoord: 0,
        score: 0,
    }

    componentDidMount() { // 컴포넌트가 첫 렌더링된 후

    }

    componentDidUpdate() { //리렌더링

    }

    componentWillUnmount() { // 컴포넌트가 제거되기 직전

    }

    render() {
        const { result, score, imgCoord } = this.state;
        return (
            <>
                <div id="computer" style={{background: `url(http://en.pimg.jp/023/182/267/1/23182267.jpg)`}}></div>
                <div>
                    <button id="rock" className="btn" onClick={() => onClickBtn('바위')}>바위</button>
                    <button id="scissor" className="btn" onClick={() => onClickBtn('가위')}>가위</button>
                    <button id="paper" className="btn" onClick={() => onClickBtn('보')}>보</button>
                </div>
                <div>{result}</div>
                <div>현재 {score}점</div>
            </>
        )
    }
}

export default RSP;


/**
 * 통합 샘플이미지
 * http://en.pimg.jp/023/182/267/1/23182267.jpg
 * 
 * 단일
 * https://mnmsoft.co.kr/aivs/images/1.png 가위
 * https://mnmsoft.co.kr/aivs/images/2.png 바위
 * https://mnmsoft.co.kr/aivs/images/3.png 보
 */