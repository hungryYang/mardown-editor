import React,{Component} from 'react'
import {View as Editor} from './editor'
import OverView from './overview/'

class MarkdownEditor extends Component{
    render(){
        return (
            <div>
                <Editor/>
                <OverView />
            </div>
        )
    }
}

export default MarkdownEditor