import {GM, GN} from './message.action'

let initialState= {
    msg:"Hi Pavankalyan"
}

let messageReducer= (state=initialState, action)=>{
    switch (action.type) {
        case GM : 
        return {msg:"it is GM"}
        case GN :
            return {msg:"it is GN"}
        default : 
        return state
    }
}
export {messageReducer}