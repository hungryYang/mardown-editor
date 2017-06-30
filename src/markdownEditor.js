import React,{Component} from 'react'
import {connect} from 'react-redux'
import Editor from './editor'
import ToolBar from './toolbar/'
import OverView from './overview/'

import {saveData,readData} from './actions.js'

class MarkdownEditor extends Component{
    componentWillUnmount(){
        localStorage.setItem('1','ss')
        
        this.props.onSaveData()
    }
    componentWillMount(){
        this.props.onReadData()
    }
    render(){
        return (
            <div className="markdown">
                <ToolBar />
                <Editor />
                <OverView />
            </div>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSaveData: () => {
      dispatch(saveData());
    }
    ,
    onReadData: ()=>{
      dispatch(readData())
    }
  }
};

export default connect(null,mapDispatchToProps)(MarkdownEditor)