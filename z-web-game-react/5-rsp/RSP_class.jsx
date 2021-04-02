// import React, { Component } from 'react';

// // 클래스의 경우 라이프 사이클 간단 정리
// // constructor -> render -> ref -> componentDidMount
// // -> (setState/props 바뀔때 -> shouldComponentUpdate(true) -> render -> componentDidUpdate)
// // 부모가 나를 없앨 때 -> componentWillUnmount -> 소멸

// const rspCoords = {
//     바위: '0',
//     가위: '-142px',
//     보: '-284px',
// }

// const scores = {
//     가위: 1,
//     바위: 0,
//     보: -1,
// }

// class RSP extends Component {
//     state = {
//         result: '',
//         imgCoord: 0,
//         score: 0,
//     }

//     interval;

//     componentDidMount() { // 컴포넌트가 첫 렌더링된 후
//         this.interval = setInterval(() => this.changeHand, 1000);
//     }

//     componentDidUpdate() { //리렌더링
//     }

//     componentWillUnmount() { // 컴포넌트가 제거되기 직전
//         // 컴포넌트 제거 후 이벤트가 남는 현상 방지,
//         // 자식컴포넌트인경우 꼭!!넣어서 메모리 누수 방지할 것
//         clearInterval(this.interval); 
//     }

//     //가위바위보 이미지 전환 함수
//     changeHand = () => {
//         const {imgCoord} = this.state; //비동기 함수는 바깥의 변수를 참조하면 클로저가 발생한다.
//         if (imgCoord === rspCoords.바위) {
//             this.setState({
//                 imgCoord: rspCoords.가위,
//             });
//         } else if (imgCoord === rspCoords.가위) {
//             this.setState({
//                 imgCoord: rspCoords.보,
//             })
//         } else if (imgCoord === rspCoords.보) {
//             this.setState({
//                 imgCoord: rspCoords.바위,
//             })
//         }
//     }

//     onClickBtn = (choice) => {
//         const {imgCoord} = this.state;
//         clearInterval(this.interval);
//         const myScore = scores[choice];
//         const cpuScore = scores[computerChoice(imgCoord)];
//         const diff = myScore - cpuScore;
//         if (diff === 0) {
//             this.setState({
//                 result: '비겼습니다.'
//             });
//         } else if ([-1, 2].includes(diff)) {
//             this.setState((prevState) => {
//                 return {
//                     result: '이겼습니다!',
//                     score: prevState.score + 1,
//                 }
//             })
//         } else {
//             this.setState((prevState) => {
//                 return {
//                     result: '졌습니다!',
//                     score: prevState.score - 1,
//                 }
//             })
//         } 
//         // 2초 기다리고 다시 시작
//         setTimeout(() => {
//             this.interval = setInterval(this.changeHand, 100);
//         }, 2000);
//     }

//     render() {
//         const { result, score, imgCoord } = this.state;
//         return (
//             <>
//                 <div id="computer" style={{background: `url(http://en.pimg.jp/023/182/267/1/23182267.jpg) ${imgCoord} 0`}}></div>
//                 <div>
//                     <button id="rock" className="btn" onClick={() => this.onClickBtn('바위')}>바위</button>
//                     <button id="scissor" className="btn" onClick={() => this.onClickBtn('가위')}>가위</button>
//                     <button id="paper" className="btn" onClick={() => this.onClickBtn('보')}>보</button>
//                 </div>
//                 <div>{result}</div>
//                 <div>현재 {score}점</div>
//             </>
//         )
//     }
// }

// export default RSP;


// /**
//  * 통합 샘플이미지
//  * http://en.pimg.jp/023/182/267/1/23182267.jpg
//  * 
//  * 단일
//  * https://mnmsoft.co.kr/aivs/images/1.png 가위
//  * https://mnmsoft.co.kr/aivs/images/2.png 바위
//  * https://mnmsoft.co.kr/aivs/images/3.png 보
//  */