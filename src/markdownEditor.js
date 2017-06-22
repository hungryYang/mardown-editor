import React,{Component} from 'react'
import Editor from './editor/index'
import OverView from './overview/index'

class MarkdownEditor extends Component{
    constructor(){
        super(...arguments)

        this.state={
            value:''
        }

        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(e){
        this.setState({
            value:e.target.value
        })
    }

    render(){
        return (
            <div>
                <Editor value={this.state.value} onChange={this.onInputChange}/>
                <OverView value={this.state.value}/>
            </div>
        )
    }
}

export default MarkdownEditor