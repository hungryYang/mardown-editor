import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'
import 'antd/dist/antd.css'

import store from './Store.js'
import MarkdownEditor from './markdownEditor.js'

ReactDOM.render(
    <Provider store={store}>
        <MarkdownEditor/>
    </Provider>,
    document.getElementById('root')
)