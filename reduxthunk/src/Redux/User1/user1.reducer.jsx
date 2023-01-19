import { USER1_REQ, USER1_SUCCESS, USER1_FAILURE } from './user1.action'

let initialState = {
    users: [],
    errorMessage: "",
    loading: false
}

let user1Reducer = (state = initialState, action) => {

    let { type, payload } = action

    switch (type) {
        case USER1_REQ:
            return { ...state, loading: true }
        case USER1_SUCCESS:
            return { ...state, users: payload }
        case USER1_FAILURE:
            return { ...state, errorMessage: payload, loading: false }
        default:
            return state
    }
}

export { user1Reducer }