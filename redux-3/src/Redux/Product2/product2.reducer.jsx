import {INCR, DECR} from './product2.action'
let initialState={
    name:"Z1 Pro",
    brand:"Vivo",
    price:35000,
    qty:0

}

let product2Reducer = (state=initialState, action)=>{
    // validating Action

    switch(action.type){
       case DECR: 
       return {...state, qty:state.qty-1}

       case INCR:
        return {...state, qty:state.qty+1}

         default:
            return state
       
    }
}

export {product2Reducer}