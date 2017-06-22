import React,{Component} from 'react'


class Editor extends Component{

    constructor(){
        super(...arguments)

        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(e){
        this.props.onChange(e)
    }

    render(){
        return(
                <textarea value={this.props.value} onChange={this.onInputChange}></textarea>
        )
    }
}

export default Editor
