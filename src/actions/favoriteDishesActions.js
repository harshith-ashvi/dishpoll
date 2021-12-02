export const getAllFavDishes = (dishes) => {
    return {
        type: "GET_ALL_DISHES",
        payload: dishes
    }
}

export const removeDish = (dishId) => {
    return {
        type: "REMOVE_DISH",
        payload: dishId
    }
}

export const addFavDish = (dish) => {
    return {
        type: "ADD_FAV_DISH",
        payload: dish
    }
}

export const replaceFavDish = (dish) => {
    return {
        type: "UPDATE_FAV_DISH",
        payload: dish
    }
}