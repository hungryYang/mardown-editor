import React,{Component} from 'react'
import Editor from './editor'
import ToolBar from './toolbar/'
import OverView from './overview/'

class MarkdownEditor extends Component{
    render(){
        return (
            <div className="markdown">
                <ToolBar />
                <Editor />
                <OverView />
            </div>
        )
    }
}

export default MarkdownEditor