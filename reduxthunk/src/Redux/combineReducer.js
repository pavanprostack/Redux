import { combineReducers } from "redux";
import { user1Reducer } from "./User1/user1.reducer";
import { usersReducer } from "./Users/user.reducer";


let rootReducer = combineReducers({ user: usersReducer, user1: user1Reducer })

export{rootReducer} 