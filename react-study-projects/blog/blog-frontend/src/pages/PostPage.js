import PageTemplate from 'components/common/PageTemplate';
import Post from 'containers/post/Post';
import React from 'react';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from 'store/modules/post';
const store = createStore(reducers);

const PostPage = ({match}) => {
    const { id } = match.params;
    return (
        <Provider store={store}>
            <PageTemplate>
                <Post id={id}/>
            </PageTemplate>
        </Provider>
    );
};

export default PostPage;