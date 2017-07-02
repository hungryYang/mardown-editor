import React,{Component} from 'react'
import {connect} from 'react-redux'
import Textarea from 'react-textarea-autosize'
import {editNow} from '../../actions.js'

class ditor extends Component{

    constructor(){
        super(...arguments)
        this.state={
            value:this.props.state.value
        }

        this.onInputChange = this.onInputChange.bind(this)
    }

    onInputChange(e){
        var value = e.target.value
        this.setState({
            value
        })
        this.props.onEdit(value)
    }

    render(){
        return(
            <div className="edit-area">
                <Textarea value={this.state.value} onChange={this.onInputChange}></Textarea>
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

export default connect (mapStateToProps,mapDispatchToProps)(ditor)
