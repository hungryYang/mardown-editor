import React,{Component} from 'react'
import {connect} from 'react-redux'
 
import {editNow} from '../../actions.js'

class Editor extends Component{

    constructor(){
        super(...arguments)

        this.state={
            value:this.props.state.value
        }

        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(e){
        var value = e.target.value
        this.props.onEdit(value)
    }

    render(){
        return(
            <div className="edit-area">
                <textarea value={this.props.state.value} onChange={this.onInputChange}></textarea>
            </div>            
        )
    }
}

const mapStateToProps = (state) => {
  return {
    state
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEdit: (value) => {
      dispatch(editNow(value));
    }
  }
};

export default connect (mapStateToProps,mapDispatchToProps)(Editor)
