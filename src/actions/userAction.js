export const userError = (error) => {
    return {
        type: "USER_ERROR",
        payload: error
    }
}

export const clearError = () => {
    return {
        type: "CLEAR_ERROR"
    }
}

export const addUser = (user) => {
    return {
        type: "ADD_USER",
        payload: user
    }
}