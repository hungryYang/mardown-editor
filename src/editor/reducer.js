import {EDIT_NOW,SAVE_FILE} from './actionTypes.js'

const initialState = {
    "value":`test`,
    "file":[]
}

export default (state ,action) => {
    if (Object.getOwnPropertyNames(state).length === 0) {
        return initialState    
    }
    switch(action.type){
        case EDIT_NOW:{
            var newState = Object.assign({},state,{value:action.value})
            return newState      
        }

        case SAVE_FILE:{
            var fileName=action.fileName
            var newFile = state.file.slice()
            newFile = newFile.filter((currentValue)=>{
                return currentValue.fileName!==fileName
            })
            var obj = {fileName:action.fileName,value:state.value}
            newFile.push(obj)
            newState = Object.assign({},state,{file:newFile})
            return newState
        }

        default:
            return state
    }
} 