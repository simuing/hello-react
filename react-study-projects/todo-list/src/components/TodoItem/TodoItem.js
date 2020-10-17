import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class TodoItem extends Component {
    //TodoItem이 추가되었을때 불필요한 렌더링 리소스 방지
    //done이 바뀌었을 때만 렌더링을 다시합니다.
    shouldComponentUpdate(nextProps, nextState) {
        return this.props.done !== nextProps.done;
    }

    render() {
        //비구조화 할당을 이용하여 this.props 안에 있는
        // done~onRemove 레퍼런스를 만들어 줍니다.
        const {done, children, onToggle, onRemove} = this.props;

        return (
            <div className={cx('todo-item')} onClick={onToggle}>
                <input className={cx('tick')} type="checkbox" checked={done} readOnly/>
                <div className={cx('text', {done})}>{children}</div>
                <div className={cx('delete')} onClick={(e) => {
                    onRemove();
                    e.stopPropagation();
                }}>[지우기]
                </div>
                
                {/* <div className={cx('delete')} onClick={onRemove}>[지우기]</div> */}
            </div>
        )
    }
}

export default TodoItem;