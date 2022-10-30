import {DECR, INCR} from './counter.action'

let initialState = {
   
        name : "Vivo Z1 Pro",
        price : 70000 ,
        qty : 1

}

let counterReducer = ((state=initialState, action)=>{
    switch(action.type){

        case DECR : 
        return {...state, qty:state.qty-1 }

        case INCR :
            return {...state, qty:state.qty+1}
         
        default: 
        return state    
    }
})

export {counterReducer}