import {EDIT_NOW,SAVE_FILE,DELETE_FILE,READ_DATA}　from './actionTypes.js'

export const editNow = (value)=>({
    type:EDIT_NOW,
    value
})

export const saveFile = (fileName) => ({
    type:SAVE_FILE,
    fileName,
    value:''
})

export const deleteFile = (fileName)=>({
    type:DELETE_FILE,
    fileName
})

export const readData = ()=>({
    type:READ_DATA
})