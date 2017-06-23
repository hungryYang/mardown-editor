import React,{Component} from 'react'
import {connect} from 'react-redux'

import {editNow} from '../actions.js'

class Editor extends Component{

    constructor(){
        super(...arguments)

        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(e){
        var value = e.target.value
        this.props.onEdit(value)
    }

    render(){
        return(
            <textarea onChange={this.onInputChange}></textarea>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEdit: (value) => {
      dispatch(editNow(value));
    }
  }
};

export default connect (null,mapDispatchToProps)(Editor)
