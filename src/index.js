import React from 'react'
import ReactDOM from 'react-dom'
import {Provider} from 'react-redux'

import store from './Store.js'
import MarkdownEditor from './markdownEditor.js'

import './style.scss'
ReactDOM.render(
    <Provider store={store}>
        <MarkdownEditor/>
    </Provider>,
    document.getElementById('root')
)