import React,{Component} from 'react'

import * as actions from './actions.js'
import reducer from './reducer.js'
import Editor from './views/Editor.js'
import SaveDialog from './views/SaveDialog.js'

class View extends Component{

    render(){
        return(
            <div>
                <Editor></Editor>
                <SaveDialog></SaveDialog>
            </div>                
        )
    }
}

export {actions,reducer,View}