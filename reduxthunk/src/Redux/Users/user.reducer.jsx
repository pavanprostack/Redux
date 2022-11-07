import { USER_REQ, USER_SUCCESS, USER_FAILURE } from './user.action'

let initialState = {
    users: [],
    errorMessage: "",
    loading: false
}

let usersReducer = (state = initialState, action) => {
    // Validating Action

    let { type, payload } = action         // ----> This is Destructuring Object

    switch (type) {
        case USER_REQ:
            return { ...state, loading: true }
        case USER_SUCCESS:
            return { ...state, users: payload }
        case USER_FAILURE:
            return { ...state, errorMessage: payload, loading: false }
        default:
            return state
    }
}

export { usersReducer }

//what is reducer?
//reducer is pure function, it take two parameter
//state,action
