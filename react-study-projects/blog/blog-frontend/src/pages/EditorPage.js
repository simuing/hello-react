import React from 'react';
import EditorTemplate from 'components/editor/EditorTemplate';
import EditorHeader from 'components/editor/EditorHeader';
import EditorPaneContainer from 'containers/editor/EditorPaneContainer';
import PreviewPaneContainer from 'containers/editor/PreviewPaneContainer';

import { createStore } from 'redux';
import { Provider } from 'react-redux';

import reducers from 'store/modules/editor';
const store = createStore(reducers);

const EditorPage = () => {
    return (
        <Provider store={store}>
            <EditorTemplate
                header={<EditorHeader/>}
                editor={<EditorPaneContainer/>}
                preview={<PreviewPaneContainer/>}
            />
        </Provider>
    );
};

export default EditorPage;