import React,{Component} from 'react'
import marked from 'marked'

import highlight from 'highlight.js'

import 'highlight.js/styles/agate.css'
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

        this.rawMarkup = this.rawMarkup.bind(this)
    }
    rawMarkup(value){
        var rawMarkup = marked(value);
        console.log(rawMarkup)
        return { __html: rawMarkup };
    }

    render(){
        return(
            <div style={style}>
                  <span dangerouslySetInnerHTML={this.rawMarkup(this.props.value)} />
            </div>                
        )
    }
}

export default OverView