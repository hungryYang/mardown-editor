import {EDIT_NOW,SAVE_FILE,DELETE_FILE,READ_DATA} from './actionTypes.js'

const initialState = {
    "value":`## Welcome 

这是一个简易的Markdown编辑器 

用React，Redux构建 后续会逐渐添加功能

 [项目地址](https://github.com/hungryYang/mardown-editor) 

目前正在找工作中．．．

wechat:1714336458

email:hungryyangc@163.com
`,
    "file":[]
}

export default (state,action) => {
    if (Object.getOwnPropertyNames(state).length === 0) {
        return initialState    
    }
    switch(action.type){
        case EDIT_NOW:{
            var newState = Object.assign({},state,{value:action.value})
            localStorage.setItem('data',JSON.stringify(newState))
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
            localStorage.setItem('data',JSON.stringify(newState))
            return newState
        }

        case DELETE_FILE:{
            fileName = action.fileName
            newFile = state.file.slice()
            newFile = newFile.filter((currentValue)=>{
                return currentValue.fileName!==fileName
            })

            newState = Object.assign({},state,{file:newFile})
            return newState
        }

        case READ_DATA:{
            const dataState =  localStorage.getItem('data')
            if(!dataState){
                return state     
            }else{
                return JSON.parse(dataState)
            }      
        }
        default:
            return state
    }
} 