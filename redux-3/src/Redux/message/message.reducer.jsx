import {HI, HELLO} from './message.action'

let initialState={
    msg:"Buddies"
}

let messageReducer = ((state=initialState, action)=>{
    
    switch(action.type){

        case HI: 
        return {msg:"Hi, Buddies"}

        case HELLO : 
        return {msg:"HELLO Buddies"}

        default : 
        return state
    }
})

export {messageReducer}