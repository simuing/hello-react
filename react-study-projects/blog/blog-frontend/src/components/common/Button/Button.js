import React from 'react';
import styles from './Button.scss';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

const cx = classNames.bind(styles);

// JSX에서 ...을 사용하면 내부에 있는 값들을 props로 넣어 줍니다.
const Div = ({children, ...rest}) => <div {...rest}>{children}</div>

const Button = ({
    children, to, onClick, disabled, theme = 'default',
}) => {
    const Element = (to && !disabled) ? Link : Div;

    return (
        <Element
            to={to}
            className={cx('button', theme, {disabled})}
            onClick={disabled ? () => null : onClick}>
            {children}
        </Element>
    )
};

export default Button;