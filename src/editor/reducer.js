import {EDIT_NOW} from './actionTypes.js'

const initialState = {
    value:''
}

export default (state = initialState,action) => {
    switch(action.type){
        case EDIT_NOW:{
            var newState = Object.assign({},state,{value:action.value})
            return newState       
        }

        default:
            return state
    }
} 