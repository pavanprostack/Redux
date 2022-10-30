const INCR ="INCR"
const DECR ="DECR"

let decrAction =()=>{
    return {type:DECR}
}

let incrAction = ()=>{
    return {type:INCR}
}

export {decrAction, incrAction, INCR, DECR}