import { combineReducers } from "redux";
import { messageReducer } from "./message/message.reducer";
import { productReducer } from "./Product/product.reducer";
import {product2Reducer} from './Product2/product2.reducer';
import {message2Reducer} from './Message2/message.reducer';


let rootReducer = combineReducers({message: messageReducer, product: productReducer, product2: product2Reducer, message2:message2Reducer}); 

export {rootReducer}