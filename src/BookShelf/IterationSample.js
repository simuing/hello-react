import React, { Component } from 'react';

class IterationSample extends Component {
    state = {
        names: ['눈사람', '얼음', '눈', '바람'],
        name: ''
    }

    handleChange = (e) => {
        this.setState({
            name: e.target.value
        });
    }

    handleInsert = () => {
        // 중요!
        // this.state.names.push('...') 로 배열을 수정하지 않은 이유는
        // state는 언제나 setState 메서드로 "업데이트" 해야 하고 직접 접근하여 수정하면 안됩니다.
        // push 같은 함수로 기존 배열 자체를 변형(수정) 하면 잘못 사용한 것입니다.
        // "자동으로 리렌더링을 트리거하지 않기 때문이죠"
        // 따라서 기존 배열을 직접 수정하지 않고, 기존 배열과 새 값을 합친 "새 배열을 생성하는"
        // this.state.names.concat('...')을 사용하면 오류 없이 제대로 작동합니다.

        // push() : 기존 배열에 원소를 "추가"하며, 배열의 총 길이를 리턴
        // concat() : 기존 배열을 "복사"한 후 원소를 추가하며, 새 배열을 리턴 
        
        // names 배열에값을 추가하고, name 값을 초기화합니다.
        this.setState({
            names: this.state.names.concat(this.state.name),
            name: ''
        });
    }

    handleRemove = (index) => {
        // 편의상 name의 레퍼런스를 미리 만듭니다.
        const { names } = this.state;

        /* 방법 1
           배열을 자르는 내장 함수 slice와
           전개 연산자(...)를 사용하여 index번째 값을 제외한 값들을
           배열에 넣어 준다.
        */
        // this.setState({
        //     names: [
        //         ...names.slice(0,index),
        //         ...names.slice(index + 1, names.length)
        //     ]
        // });

        /* 방법 2
           filter를 활용한 방법
        */
        this.setState({
            // filter로 index번째를 제외한 원소만 있는 새 배열 생성
            names: names.filter((item, i) => i !== index)
        });
    }

    render() {
        const nameList = this.state.names.map(
            (name, index) => (
                <li 
                    key={index}
                    onDoubleClick={() => this.handleRemove(index)}>
                    {name}
                </li>
            )
        );

        return (
            <div>
                <input
                    onChange={this.handleChange}
                    value={this.state.name}/>
                <button onClick={this.handleInsert}>추가</button>
                <ul>
                    {nameList}
                </ul>
            </div>
        )
    }
}

export default IterationSample;