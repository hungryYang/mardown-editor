import React,{Component} from 'react'
import marked from 'marked'
import highlight from 'highlight.js'
import 'highlight.js/styles/agate.css'

import Store from '../Store.js'

var style={
    color:"white",
    backgroundColor:"#333"
}
marked.setOptions({
  highlight: function (code) {
    return highlight.highlightAuto(code).value;
  }
});

class OverView extends Component{
    constructor(){
        super(...arguments)

        this.state = {
            value : ''
        }

        this.viewPage = this.viewPage.bind(this)
        this.rawMarkup = this.rawMarkup.bind(this)
    }
    rawMarkup(){
        var rawMarkup = marked(this.state.value);
        return { __html: rawMarkup };
    }

    viewPage(){
        this.setState({
            value:Store.getState().value||''
        })    
    }

    render(){
        return(
            <div style={style}>
                <button onClick={this.viewPage}>预览</button>
                <span dangerouslySetInnerHTML={this.rawMarkup()} />
            </div>                
        )
    }
}

export default OverView