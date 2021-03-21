import React from 'react';
import EditorTemplate from 'components/editor/EditorTemplate';
import EditorHeaderContainer from 'containers/editor/EditorHeaderContainer';
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
                header={<EditorHeaderContainer/>}
                editor={<EditorPaneContainer/>}
                preview={<PreviewPaneContainer/>}
            />
        </Provider>
    );
};

export default EditorPage;