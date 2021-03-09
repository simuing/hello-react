import React, { Component } from 'react';
import TodoItem from '../TodoItem';

class TodoList extends Component {

    /**
     * shouldComponentUpdate를 구현해야 할 세 가지 상황
     * 1. 컴포넌트 배열이 랜더링되는 리스트 컴포넌트일 때
     * 2. 리스트 컴포넌트 내부에 있는 아이템 컴포넌트일 때
     * 3. 하위 컴포넌트 개수가 많으며, 
     *    리렌더링되지 말아야 할 상황에서도 리렌더링이 진행될 때
     */
    //TodoItem이 추가되었을때 불필요한 렌더링 리소스 방지
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.todos !== nextProps.todos;
    }

    render() {
        const { todos, onToggle, onRemove } = this.props;
        const todoList = todos.map(
            todo => (
                <TodoItem
                    key={todo.get('id')}
                    done={todo.get('done')}
                    onToggle={() => onToggle(todo.get('id'))}
                    onRemove={() => onRemove(todo.get('id'))}>
                    {todo.get('text')}
                </TodoItem>
            )
        );

        return (
            <div>
                {todoList}
            </div>
        );
    }
}

export default TodoList;