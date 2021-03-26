import React, { Component } from 'react';
import EditorHeader from 'components/editor/EditorHeader/EditorHeader';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { withRouter } from 'react-router-dom';

import * as editorActions from 'store/modules/editor';

import queryString from 'query-string';

class EditorHeaderContainer extends Component {
    componentDidMount() {
        const { EditorActions } = this.props;
        EditorActions.initialize(); // 에디터를 초기화합니다.

        // 쿼리 파싱
        const { id } = queryString.parse(this.props.location.search);
        if(id) {
            // id가 존쟇면 포스트 불러오기
            EditorActions.getPost(id);
        }
    }

    handleGoBack = () => {
        const { history } = this.props;
        history.goBack();
    }

    handleSubmit = async () => {
        const { title, markdown, tags, EditorActions, history } = this.props;
        const post = {
            title,
            body: markdown,
            // 태그 텍스트를 ,로 분리시키고 앞뒤 공백을 지운 후 중복되는 값을 제거합니다.
            tags: tags === "" ? [] : [...new Set(tags.split(',').map(tag => tag.trim()))]
        };
        try {
            const { id } = queryString.parse(this.props.location.search);
            if(id) {
                await EditorActions.editPost({id, ...post});
                history.push(`/post/${id}`);
                return;
            }
            await EditorActions.writePost(post);
            // 페이지를 이동시킵니다. 주의: postId는 위쪽에서 레퍼런스를 만들지 안혹
            // 이 자리에서 this.props.postId를 조회해야 합니다.(현재 값을 불러오기 위함)
            history.push(`post/${this.props.postId}`);
        } catch(e) {
            console.log(e);
        }
    }

    render() {
        const { handleGoBack, handleSubmit } = this;
        const { id } = queryString.parse(this.props.location.search);
        return (
            <EditorHeader
                onGoBack={handleGoBack}
                onSubmit={handleSubmit}
                isEdit={id ? true : false}
            />
        );
    }
}

export default connect(
    (state) => ({
        title: state.get('title'),
        markdown: state.get('markdown'),
        tags: state.get('tags'),
        postId: state.get('postId')
    }),
    (dispatch) => ({
        EditorActions: bindActionCreators(editorActions, dispatch)
    })
)(withRouter(EditorHeaderContainer));