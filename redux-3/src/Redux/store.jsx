import { createStore} from 'redux'
import { rootReducer } from './combineReducers'
import {composeWithDevTools} from '@redux-devtools/extension'
// import {messageReducer} from './message/message.reducer'
// import {productReducer} from './Product/product.reducer'


let store = createStore(rootReducer, composeWithDevTools())

export {store}