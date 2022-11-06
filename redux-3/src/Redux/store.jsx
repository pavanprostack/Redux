import { createStore} from 'redux'
import { rootReducer } from './combineReducers'
import {composeWithDevTools} from '@redux-devtools/extension'


let store = createStore(rootReducer, composeWithDevTools())

export {store}