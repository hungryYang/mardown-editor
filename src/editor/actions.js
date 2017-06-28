import {EDIT_NOW,SAVE_FILE,EDIT_FILE}　from './actionTypes.js'

export const editNow = (value)=>({
    type:EDIT_NOW,
    value
})

export const saveFile = (fileName) => ({
    type:SAVE_FILE,
    fileName,
    value:''
})

export const editFile = (value)=>({
    type:EDIT_FILE,
    value
})