import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import ListContainer from 'containers/list/ListContainer';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from 'store/modules/list';
const store = createStore(reducers);

const ListPage = ({match}) => {
    // 페이지 기본 값 1 설정
    const { page = 1, tag } = match.params;

    return (
        <Provider store={store}>
            <PageTemplate>
                <ListWrapper>
                    <ListContainer
                        page={parseInt(page, 10)}
                        tag={tag}
                    />
                </ListWrapper>
            </PageTemplate>
        </Provider>
    );
};

export default ListPage;