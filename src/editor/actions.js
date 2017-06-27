import {EDIT_NOW,SAVE_FILE}　from './actionTypes.js'

export const editNow = (value)=>({
    type:EDIT_NOW,
    value
})

export const saveFile = (fileName) => ({
    type:SAVE_FILE,
    fileName,
    value:''
})