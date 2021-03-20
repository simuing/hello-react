import React, { Component } from 'react';
import EditorPane from './EditorPane/EditorPane';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as editorActions from 'store/modules/editor';


class EditorPaneContainer extends Component {
    handleChangeInput = ({name, value}) => {
        const { EditorActions } = this.props;
        EditorActions.changeInput({name, value});
    }

    render() {
        const { title, tags, markdown } = this.props;
        // const { handleChangeInput } = this.props
        return (
            <EditorPane
                title={title}
                markdown={markdown}
                tags={tags}
                onChangeInput={this.handleChangeInput}
            />
        );
    }
}

export default connect(
    (state) => ({
        title: state.get('title'),
        markdown: state.get('markdown'),
        tags: state.get('tags')
    }),
    (dispatch) => ({
        EditorActions: bindActionCreators(editorActions, dispatch)
    })
)(EditorPaneContainer);