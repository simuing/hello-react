import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {
    render() {
        const { todos } = this.props;
        const todoList = todos.map(
            todo => (
                <TodoItem
                    key={todo.id}
                    done={todo.done}>
                    {todo.text}
                </TodoItem>
            )
        );

        return (
            <div>
                {todoList}
                {/* <TodoItem done>리엑트 공부하기</TodoItem>
                <TodoItem>컴포넌트 스타일링 해보기</TodoItem> */}
            </div>
        );
    }
}

export default TodoList;