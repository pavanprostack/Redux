// Action Types

const INCR = "INCR"
const DECR = "DECR"

// Actions                // Action returns Actionable Object.

let decrAction = () => {
    return { type: DECR }
}

let incrAction = () => {
    return { type: INCR }
}

export { decrAction, incrAction, INCR, DECR }