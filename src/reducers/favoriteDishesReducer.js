const favoriteDishesInitialState = []

const favoriteDishesReducer = (state = favoriteDishesInitialState, action) => {
    switch (action.type) {
        case "GET_ALL_DISHES" : {
            return [...action.payload]
        }

        case "REMOVE_DISH" : {
            return state.filter((dish) => dish.id !== action.payload)
        }

        case "ADD_FAV_DISH" : {
            return [...state, action.payload]
        }

        case "UPDATE_FAV_DISH" : {
            return state.map((dish) => {
                if (dish.value === action.payload.value) {
                    return {...action.payload}
                } else {
                    return {...dish}
                }
            })
        }

        default : {
            return [...state]
        }
    }
}

export default favoriteDishesReducer