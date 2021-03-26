import React, { Component } from 'react';
import PostBody from 'components/post/PostBody';
import PostInfo from 'components/post/PostInfo';
import * as postActions from 'store/modules/post';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import shouldCancel from 'lib/shouldCancel';
import removeMD from 'remove-markdown';
import { Helmet } from 'react-helmet';

class Post extends Component {
    componentDidMount() {
        this.fetchData();
    }

    async fetchData() {
        const { PostActions } = this.props;
        if(shouldCancel()) return;
        try {
            await PostActions.getPost(1);
            console.log('data is fetched!');
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        const { loading, post } = this.props;

        if(loading) return null; // 로깅 중일 때는 아무것도 보여 주지 않음
        
        const { title, body, publishedDate, tags } = post.toJS();

        return (
            <div>
                {/* body 값이 있을 때만 Helmet 설정 (포스트 제목과 내용을 head 정보에 넣는다.)*/ 
                body && (
                    <Helmet>
                        <title>{title}</title>
                        <meta name="description" content={removeMD(body).slice(0,200)}/>
                    </Helmet>
                )}
                { loading && 'Loading...' }
                <div>
                    <PostInfo title={title} publishedDate={publishedDate} tags={tags} />
                    <PostBody body={body} />
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        // post: console.log(state),
        post: state.get('post'),
        // post: state.blog.post,
        loading: state.pender.pending['GET_POST'] // 로딩 상태
    }),
    (dispatch) => ({
        PostActions: bindActionCreators(postActions, dispatch)
    })
)(Post);