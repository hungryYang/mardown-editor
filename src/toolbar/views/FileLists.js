import React from 'react'
import {connect} from 'react-redux'
import FileItem from './FileItem.js'

const FileLists = ({state,visible,onClick})=>{
    const file = state.file
    return (
        <ul onClick={()=>{ onClick()}}>  
            {
                file.map((currentFile)=>(
                    <FileItem
                    key={'File'+currentFile.fileName}
                    fileName = {currentFile.fileName}
                    fileValue = {currentFile.value}/>
                ))
            }   
        </ul>         
    )
}

const mapStateToProps = (state) => {
  return {
    state
  };
}

export default connect(mapStateToProps)(FileLists)