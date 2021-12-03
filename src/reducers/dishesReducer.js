const dishesInitialState = {
    isLoading: false,
    data: [],
    errors: {}
}

const dishesReducer = (state = dishesInitialState, action) => {
    switch (action.type) {
        case "DATA_LOADING" : {
            return {...state, isLoading: !state.isLoading}
        }

        case "ALL_DISHES" : {
            return {...state, data: action.payload}
        }

        case "REMOVE_ALL_DISHES" : {
            return {...state, data: []}
        }

        default : {
            return {...state}
        }
    }
}

export default dishesReducer