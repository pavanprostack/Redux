import {WISH, JOSH} from './message2.action'

let initialState={
    message:"Concentrate More"
}

let message2Reducer = (state=initialState, action)=>{
    switch(action.type){
        case WISH :
            return {...state, message:"Hey No One is Greate Than You"}
            case JOSH : 
            return {...state, message:"Wait For The Better Opportunity"}
            default :
            return state
        }
           
}

export {message2Reducer}