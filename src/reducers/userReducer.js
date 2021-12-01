const userInitialState = {
    isLoading: false,
    data: {},
    errors: {}
}

const userReducer = (state = userInitialState, action) => {
    switch (action.type) {
        default : {
            return {...state}
        }
    }
}

export default userReducer