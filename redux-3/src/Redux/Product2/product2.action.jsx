// Action types

const INCR = "HI, pandi"
const DECR = "Bye, Pandi"

let pandiAction = ()=>{
    return {type:INCR}
}

let pavanAction = ()=>{
    return {type:DECR}
}
export {INCR, DECR, pandiAction, pavanAction}