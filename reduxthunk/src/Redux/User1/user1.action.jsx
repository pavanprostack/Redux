import Axios from 'axios'

// Action Types

const USER1_REQ = "USER1_REQ"
const USER1_SUCCESS = "USER1_SUCCESS"
const USER1_FAILURE = "USER1_FAILURE"

// Actions

let fetchUserRequest = () => {
    return { type: USER1_REQ }
}

let fetchUserSuccess = (users) => {
    return { type: USER1_SUCCESS, payload:users}
}

let fetchUserFailure = (error) => {
    return { type: USER1_FAILURE, payload:error }
}

// Special Function     // It Returns Function

let fetchUserData = () => {
    return (dispatch) => {
        dispatch(fetchUserRequest())
        Axios.get('https://jsonplaceholder.typicode.com/users').then((res) => {
            dispatch(fetchUserSuccess(res.data))
        }).catch((err) => {
            dispatch(fetchUserFailure(err))
        })
    }
}

export {fetchUserData, USER1_REQ, USER1_SUCCESS, USER1_FAILURE }