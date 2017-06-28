import React from 'react'
import {connect} from 'react-redux'
import {editNow} from '../actions.js'
const FileItem = ({fileName,fileValue,onEdit})=>{
    return (
        <li>  
            <div onClick={()=>{onEdit(fileValue)}}>{fileName}</div>
        </li>         
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEdit: (fileValue) => {
      dispatch(editNow(fileValue));
    }
  }
};

export default connect(null,mapDispatchToProps)(FileItem)