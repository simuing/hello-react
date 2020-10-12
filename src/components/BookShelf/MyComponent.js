import React, { Component } from 'react';
import PropTypes from 'prop-types';

class MyComponent extends Component {
    static defaultProps = {
        name: '기본 이름'
    }

    static propTypes = {
        name: PropTypes.string, // name props 타입을 문자열로 설정합니다.
        age: PropTypes.number.isRequired //필수적으로 존재해야 하며, 숫자입니다.
    }

    state = {
        number: 0
    }

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         number: 0
    //     }

    //     function BlackDog() {
    //         this.name = '흰둥이';
    //         return {
    //             name: '검둥이',
    //             bark: function() {
    //                 console.log(this.name + ': 멍멍!');
    //             }
    //         }
    //     }

    //     const blackDog = new BlackDog();
    //     blackDog.bark(); // 검둥이: 멍멍!

    //     function WhiteDog() {
    //         this.name = '흰둥이';
    //         return {
    //             name: '검둥이',
    //             bark: () => {
    //                 console.log(this.name + ': 멍멍!');
    //             }
    //         }
    //     }

    //     const whiteDog = new WhiteDog();
    //     whiteDog.bark(); // 흰둥이: 멍멍!
    // }

    render() {
        return (
            <div>
                <p>나의 새롭고 멋진 컴포넌트</p>
                <p>제 이름은 {this.props.name} 입니다.</p>
                <p>저는 {this.props.age.k}살 입니다.</p>
                <p>state number: {this.state.number}</p>
                <button onClick={()=>{
                        this.setState({
                            number: this.state.number + 1
                        })
                    }
                }>더하기</button>
                <button onClick={()=>{
                        this.setState({
                            number: this.state.number - 1
                        })
                    }
                }>빼기</button>
            </div>
        )
    }

    
}

export default MyComponent;