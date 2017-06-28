import {createStore,applyMiddleware,compose} from 'redux'

import editorReducer from './reducer.js'

const win = window

// const reducer = combineReducers({
//     editor:editorReducer
// })

const middlewares = [];
if (process.env.NODE_ENV !== 'production') {
//   middlewares.push(require('redux-immutable-state-invariant')());
}   

const storeEnhancers = compose(
  applyMiddleware(...middlewares),
  (win && win.devToolsExtension) ? win.devToolsExtension() : (f) => f,
);



export default createStore(editorReducer,{},storeEnhancers)