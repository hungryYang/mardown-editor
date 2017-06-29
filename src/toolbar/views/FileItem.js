import React from 'react'
import {connect} from 'react-redux'
import {editNow,deleteFile} from '../../actions.js'


const FileItem = ({fileName,fileValue,onEdit,onDel})=>{
    var blob = new Blob([fileValue])
    return (
        <li onClick={()=>{onEdit(fileValue)}}>  
           
                {fileName}
                <span>
                  <svg className="icon" aria-hidden="true"  onClick={()=>{onDel(fileName)}}>
                    <use xlinkHref="#icon-shanchu"></use>
                  </svg>
                  <a href={window.URL.createObjectURL(blob)} download={fileName+'.md'}>
                    <svg className="icon" aria-hidden="true"  onClick={()=>{onDel(fileName)}}>
                      <use xlinkHref="#icon-xiazai"></use>
                    </svg>
                  </a> 
                </span>
       
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