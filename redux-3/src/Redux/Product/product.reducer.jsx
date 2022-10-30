import {INCR, DECR} from './product.action'

let initialState = {
    product_Name : "Iphone 14",
    price:70000,
    qty:1
}

let productReducer = ((state=initialState, action)=>{
    switch(action.type){

        case DECR :
            return {...state, qty:state.qty - 1}

        case INCR :
            return {...state, qty:state.qty + 1} 

        default :
        return state       
    }
})

export {productReducer}