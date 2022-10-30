// action types
const HI = "HI"
const HELLO = "HELLO"

// actions

let gmAction = ()=>{
    return {type:HI}
}

let gnAction = ()=>{
    return {type:HELLO}
}

export {gmAction, gnAction, HI, HELLO}