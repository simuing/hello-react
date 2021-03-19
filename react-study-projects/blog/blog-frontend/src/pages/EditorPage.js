import React from 'react';
import EditorTemplate from 'components/editor/EditorTemplate';
import EditorHeader from 'components/editor/EditorHeader';
import EditorPaneContainer from 'components/editor/EditorPaneContainer';
import PreviewPane from 'components/editor/PreviewPane';

const EditorPage = () => {
    return (
        <EditorTemplate
            header={<EditorHeader/>}
            editor={<EditorPaneContainer/>}
            preview={<PreviewPane/>}
        />
    );
};

export default EditorPage;