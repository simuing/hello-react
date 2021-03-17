import React from 'react';
import styles from './PageTemplate.scss';
import className from 'classnames/bind';

const cx = classNames.bind(styles);

const PageTemplate = () => (
    <div className={cx('page-template')}>
        PageTemplate
    </div>
);

export default PageTemplate;