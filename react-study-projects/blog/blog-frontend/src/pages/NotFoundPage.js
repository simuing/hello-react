import NotFound from 'components/common/NotFound/NotFound';
import React from 'react';

const NotFoundPage = ({history, staticContext}) => {
    // staticContext는 서버 쪽에서만 존재합니다.
    if(staticContext) {
        staticContext.isNotFound = true;
    }
    return (
        <NotFound onGoBack={history.goBack}/>
    );
};

export default NotFoundPage;