import React,{Component} from 'react'
import Editor from './editor'
import ToolBar from './toolbar/'
import OverView from './overview/'

class MarkdownEditor extends Component{
    render(){
        return (
            <div>
                <Editor />
                <ToolBar />
                <OverView />
            </div>
        )
    }
}

export default MarkdownEditor