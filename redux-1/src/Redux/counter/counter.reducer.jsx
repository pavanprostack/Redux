import {DECR, INCR} from './counter.action'

let initialState = {
    name:"Iphone 14",
    price : 97000,
    qty : 1
}

let counterReducer = ((state=initialState, action)=>{                  // reducer expecting two parameters i.e, state & action
    switch(action.type){
        case DECR :
            return {...state, qty:state.qty - 1}
        case INCR : 
        return {...state, qty:state. qty + 1}    
        default : 
        return state
    }
})
export {counterReducer}