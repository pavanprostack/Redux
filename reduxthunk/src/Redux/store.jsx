import { usersReducer } from "./Users/user.reducer";
import { composeWithDevTools } from '@redux-devtools/extension'
import { createStore, applyMiddleware } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

let middleWare = [logger, thunk]

let store = createStore(usersReducer, composeWithDevTools(applyMiddleware(...middleWare)))

export { store } 