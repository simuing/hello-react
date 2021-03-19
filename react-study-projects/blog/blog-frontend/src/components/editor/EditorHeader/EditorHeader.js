import React from 'react';
import styles from './EditorHeader.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const EditorHeader = () => (
    <div className={cx('post-list')}>
        <PostItem/>
        <PostItem/>
        <PostItem/>
        <PostItem/>
    </div>
);

export default EditorHeader;