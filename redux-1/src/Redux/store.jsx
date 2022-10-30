import {createStore} from 'redux'
import {counterReducer} from './counter/counter.reducer'
import {composeWithDevTools} from 'redux-devtools-extension'

let store = createStore(counterReducer, composeWithDevTools() )                    // it is expecting two parameters i.e, reducermethod(from reducer) & composeWithDevTools.

export {store}