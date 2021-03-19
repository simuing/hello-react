import React from 'react';
import styles from './PreviewPane.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PreviewPane = () => (
    <div className={cx('post-list')}>
        <PostItem/>
        <PostItem/>
        <PostItem/>
        <PostItem/>
    </div>
);

export default PreviewPane;