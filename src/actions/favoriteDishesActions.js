//get all dishes from localstorage
export const getAllFavDishes = (dishes) => {
    return {
        type: "GET_ALL_DISHES",
        payload: dishes
    }
}

//remove dish from favourite list
export const removeDish = (dishId) => {
    return {
        type: "REMOVE_DISH",
        payload: dishId
    }
}

//add new favourite dish
export const addFavDish = (dish) => {
    return {
        type: "ADD_FAV_DISH",
        payload: dish
    }
}

//update favourite dish list if two dish has same points/value
export const replaceFavDish = (dish) => {
    return {
        type: "UPDATE_FAV_DISH",
        payload: dish
    }
}