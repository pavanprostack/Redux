// action type
const GM = "GM"
const GN = "GN"

// action
let gmAction=()=>{
    console.log("it is from GmAction");
    return {type:GM}
}

let gnAction = ()=>{
    console.log("it is from GnAction")
    return {type:GN}
}
export {gmAction,gnAction,GM,GN}