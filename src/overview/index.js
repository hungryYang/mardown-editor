import React from 'react'
import {connect} from 'react-redux'
import marked from 'marked'
import highlight from 'highlight.js'
import 'highlight.js/styles/agate.css'

marked.setOptions({
  highlight: function (code) {
    return highlight.highlightAuto(code).value;
  }
});

const OverView = ({state})=>{
    var value = state.value||' '
    return (
        <div>
            <span dangerouslySetInnerHTML={ {__html: marked(value)}} />
        </div>            
    )
}

const mapStateToProps = (state) => {
  return {
    state
  };
}

export default connect(mapStateToProps)(OverView);
