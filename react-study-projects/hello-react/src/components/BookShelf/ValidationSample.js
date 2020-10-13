import React, {Component} from 'react';
import './ValidationSample.css'

class ValidationSample extends Component {
    state = {
        password: '',
        clicked: false,
        validated: false
    }

    handleChange = (e) => {
        this.setState({
            password: e.target.value
        });

        console.log(this.state);
    }

    handleButtonClick = () => {
        this.setState({
            clicked: true,
            validated: this.state.password === '0000'
        });
        this.inputA.focus();
    }

    render() {
        return (
            <div>
                {/* 5장 ref: DOM에 이름달기 */}
                {/* this.inputA은 input 요소의 DOM을 가리킵니다. */}
                <input
                    ref={(ref) => {this.inputA=ref}}
                    type="password"
                    value={this.state.password}
                    onChange={this.handleChange}
                    className={this.state.clicked ? (this.state.validated ? 'success' : 'failure') : ''}
                />
                <button onClick={this.handleButtonClick}>검증하기</button>
            </div>
        )
    }
}

export default ValidationSample;