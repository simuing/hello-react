import React, { Component } from 'react';
import PageTemplate from './PageTemplate';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {
    state = {
        input: '', // input 값
        todos: [
            { id:0, text: '리엑트 공부하기', done: true },
            { id:1, text: '컴포넌트 스타일링 해보기', done: false }
        ]
    }

    // 일정 데이터 안에 들어가는 id 값
    id = 1
    getId = () => {
        return ++this.id; // 현재 값에서 1을 더한 값을 반환
    }

    handleChange = (e) => {
        const { value } = e.target;
        this.setState({
            input: value
        });
    }

    // 새 데이터 추가
    handleInsert = () => {
        const { todos, input } = this.state;

        // 새 데이터 객체 만들기
        const newTodo = {
            text: input,
            done: false,
            id: this.getId()
        }

        // 배열 안에 새 데이터를 집어넣습니다.
        this.setState({
            todos: [...todos, newTodo],
            input: ''
        });
    }

    render() {
        //비구조화 할당, this.props 또는 this안써도 됨.
        const { input, todos } = this.state; 
        const {
            handleChange,
            handleInsert
        } = this;

        return (
            <PageTemplate>
                <TodoInput onChange={handleChange} onInsert={handleInsert} value={input}/>
                <TodoList todos={todos}/>
            </PageTemplate>
        )
    }
}

export default App; 