//user error when email/passowrd doesn not match with stored data
export const userError = (error) => {
    return {
        type: "USER_ERROR",
        payload: error
    }
}

//clear error if there are any
export const clearError = () => {
    return {
        type: "CLEAR_ERROR"
    }
}

//add user details when logged in
export const addUser = (user) => {
    return {
        type: "ADD_USER",
        payload: user
    }
}

//remove user when logged out
export const removeUser = () => {
    return {
        type: "REMOVE_USER"
    }
}