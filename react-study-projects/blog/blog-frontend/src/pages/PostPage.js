import PageTemplate from 'components/common/PageTemplate';
import PostBody from 'components/post/PostBody';
import PostInfo from 'components/post/PostInfo';
import React from 'react';

const PostPage = () => {
    return (
        <PageTemplate>
            <PostInfo/>
            <PostBody/>
        </PageTemplate>
    );
};

export default PostPage;