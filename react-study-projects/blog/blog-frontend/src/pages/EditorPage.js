import React from 'react';
import EditorTemplate from 'components/editor/EditorTemplate';
import EditorHeader from 'components/editor/EditorHeader';
import EditorPaneContainer from 'components/editor/EditorPaneContainer';
import PreviewPane from 'components/editor/PreviewPane';

import reducers from 'store/modules/editor';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

const store = createStore(reducers);

const EditorPage = () => {
    return (
        <EditorTemplate
            header={<EditorHeader/>}
            editor={
                <Provider store={store}>
                    <EditorPaneContainer/>
                </Provider>
            }
            preview={<PreviewPane/>}
        />
    );
};

export default EditorPage;