const userInitialState = {
    isLoading: false,
    data: {},
    errors: {}
}

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        case "USER_ERROR" : {
            return {...state, errors: action.payload}
        }

        case "CLEAR_ERROR" : {
            return {...state, errors: {}}
        }

        case "ADD_USER" : {
            return {...state, data: action.payload}
        }

        case "REMOVE_USER" : {
            return {...state, data: {}}
        }

        default : {
            return {...state}
        }
    }
}

export default userReducer