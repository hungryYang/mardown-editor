import React from 'react'

import SaveDialog from './views/SaveDialog.js'
import ShowFiles from './views/ShowFiles.js'
const ToolBar = ()=>{
    return(
        <div>
            <SaveDialog></SaveDialog>
            <ShowFiles></ShowFiles>
        </div>            
    )
}

export default ToolBar