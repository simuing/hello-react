import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

/**
 * 9.2.5 버튼 생성
 * 1. CSS Module 형식으로 클래스 설정
 * 2. 함수형 컴포넌트로 구성
 * 3. props 의 rest 는 나중에 이 컴포넌트가 받을 모든 props를 명시
 * 4. 비구조화 할당 문법에서 ...foo 형식으로 입력하면
 *    비구조화 할당을 할 때 따로 지정하지 않은 것들은 모두 foo 객체에 담긴다.
 * 
 * const object = {
 *  a: 1,
 *  b: 2,
 *  c: 3
 * };
 * const { a, ...foo } = object;
 * 
 * console.log(a);   // 1
 * console.log(foo); // {b:2, c:3}
 */
const Button = ({children, ...rest}) => {
    return (
        <div className={cx('button')} {...rest}>
            {children}
        </div>

        // rest 객체 안에 onClick과 style이 들어 있다면
        // <div onClick={onClick} style={style} 같은 형식으로 렌더링된다.
    );
};

export default Button;