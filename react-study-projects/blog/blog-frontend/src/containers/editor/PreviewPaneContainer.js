import React, { Component } from 'react';
import { connect } from 'react-redux';
import PreviewPane from 'components/editor/PreviewPane/PreviewPane';

class PreviewPaneContainer extends Component {
    render() {
        const { title, markdown } = this.props;
        return (
            <PreviewPane title={title} markdown={markdown} />
        );
    }
}

export default connect(
    (state) => ({
        title: state.get('title'),
        markdown: state.get('markdown')
    })
)(PreviewPaneContainer);