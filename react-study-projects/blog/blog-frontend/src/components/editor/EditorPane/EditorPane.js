import React from 'react';
import styles from './EditorPane.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EditorPane = () => (
    <div className={cx('post-list')}>
        <PostItem/>
        <PostItem/>
        <PostItem/>
        <PostItem/>
    </div>
);

export default EditorPane;