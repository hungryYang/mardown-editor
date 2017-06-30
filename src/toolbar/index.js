import React from 'react'

import SaveDialog from './views/SaveDialog.js'
import ShowFiles from './views/ShowFiles.js'

import './css/style.scss'
import './views/iconfont.js'
const ToolBar = ()=>{
    return(
        <div className="tool-bar">
            {/*<OverView></OverView>*/}
            <SaveDialog></SaveDialog>
            <ShowFiles></ShowFiles>
        </div>            
    )
}

export default ToolBar