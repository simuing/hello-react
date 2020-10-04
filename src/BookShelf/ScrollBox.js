import React, { Component } from 'react';

// 5.3.2 컴포넌트 초기 설정
class ScrollBox extends Component {
    /**
     * 1. ScrollBox 컴포넌트 생성
     * 2. 컴포넌트 ref 달기
     * 3. reef를 이용하여 컴포넌트 내부 메서드 호출
     */
    render() {
        const style = {
            border: '1px solid black',
            height: '300px',
            width: '300px',
            overflow: 'auto',
            position: 'relative'
        };

        const innerStyle = {
            width: '100%',
            height: '650px',
            background: 'linear-gradient(white, black)'
        }

        return (
            <div
                style={style}
                ref={(ref)=>{this.box=ref}}>
                <div style={innerStyle}></div>
            </div>
        )
    }
}

export default ScrollBox;