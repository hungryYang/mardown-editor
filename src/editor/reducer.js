import {EDIT_NOW,SAVE_FILE} from './actionTypes.js'

const initialState = {
    value:''
}



export default (state = initialState,action) => {
    switch(action.type){
        case EDIT_NOW:{
            var newState = Object.assign({},state,{value:action.value})
            return newState      
        }

        case SAVE_FILE:{
            var obj = new Object()
            obj[`${action.fileName}`]={fileName:action.fileName,value:state.value}
            newState = Object.assign({},state,obj)
            return newState
        }

        default:
            return state
    }
} 