import React from 'react';
import PageTemplate from 'components/common/PageTemplate';
import ListWrapper from 'components/list/ListWrapper';
import ListContainer from 'containers/list/ListContainer';
import * as listActions from 'store/modules/list';

import { bindActionCreators, createStore } from 'redux';
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';

import reducers from 'store/modules/list';
const store = createStore(reducers);

const ListPage = ({match}) => {
    // 페이지 기본 값 1 설정
    const { page = 1, tag } = match.params;

    // title 값을 page 값과 tag 값에 따라 동적으로 설정합니다.
    const title = (() => {
        let title = 'reactblog';
        if(tag) {
            title += ` #${tag}`
        }
        if(page !== 1) {
            title += ` - ${page}`;
        }
        return title;
    })();

    return (
        <Provider store={store}>
            <PageTemplate>
                <Helmet>
                    <title>{title}</title>
                </Helmet>
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

ListPage.payload = (dispatch, params) => {
    const { page = 1, tag } = params;
    const ListActions = bindActionCreators(listActions, dispatch);
    return ListActions.getPostList({
        page, tag
    });
}

export default ListPage;