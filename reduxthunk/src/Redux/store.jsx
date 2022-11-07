
import { composeWithDevTools } from '@redux-devtools/extension'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import { rootReducer } from "./combineReducer";

let middleWare = [logger, thunk]

let store = createStore(rootReducer, composeWithDevTools(applyMiddleware(...middleWare)))

export { store } 