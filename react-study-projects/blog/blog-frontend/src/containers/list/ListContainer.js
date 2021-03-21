import React, { Component } from 'react';
import PostList from 'components/list/PostList';
import Pagination from 'components/list/Pagination';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as listActions from 'store/modules/list';

class ListContainer extends Component {
    componentDidMount() {
        this.fetchData();
    }

    componentDidUpdate(prevProps, prevState) {
        // 페이지/태그가 바뀔 때 리스트를 다시 불러옵니다.
        if(prevProps.page !== this.props.page || prevProps.tag !== this.props.tag) {
            this.getPostList();
            // 스크롤바를 맨 위로 올립니다.
            document.documentElement.scrollTop = 0;
        }
    }

    async fetchData() {
        const { tag, page, ListActions } = this.props;
        try {
            await ListActions.getPostList({
                page,
                tag
            });
            console.log('data is fetched!');
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        const { loading, posts, page, lastPage, tag } = this.props;
        if(loading) return null; // 로깅 중일 때는 아무것도 보여 주지 않음
        return (
            <div>
                { loading && 'Loading...' }
                <div>
                    <PostList posts={posts}/>
                    <Pagination page={page} lastPage={lastPage} tag={tag}/>
                </div>
            </div>
        );
    }
}

export default connect(
    (state) => ({
        lastPage: state.list.get('lastPage'),
        post: state.list.get('post'),
        loading: state.pender.pending['list/GET_POST_LIST']
    }),
    (dispatch) => ({
        ListActions: bindActionCreators(listActions, dispatch)
    })
)(ListContainer);