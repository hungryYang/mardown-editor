import React from 'react'
import {connect} from 'react-redux'
import {Button} from 'antd'
import {editNow,deleteFile} from '../../actions.js'
const FileItem = ({fileName,fileValue,onEdit,onDel})=>{
    var blob = new Blob([fileValue])
    return (
        <li>  
            <div onClick={()=>{onEdit(fileValue)}}>
                {fileName}
                <Button type="danger" onClick={()=>{onDel(fileName)}}>Delete</Button>
                <a href={window.URL.createObjectURL(blob)} download={fileName+'.md'}>下载</a>
            </div>  
        </li>         
    )
}

const mapDispatchToProps = (dispatch) => {
  return {
    onEdit: (fileValue) => {
      dispatch(editNow(fileValue));
    },
    onDel: (fileName)=>{
      dispatch(deleteFile(fileName))
    }
  }
};

export default connect(null,mapDispatchToProps)(FileItem)