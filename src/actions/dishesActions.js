import axios from "axios";

//to get all the dishes from API
export const startGetDishes = () => {
    return (
        (dispatch) => {
            dispatch(dataLoading())
            return (
                axios.get("https://raw.githubusercontent.com/syook/react-dishpoll/main/db.json")
                    .then((response) => {
                        const result = response.data
                        dispatch(dataLoading())
                        dispatch(allDishes(result))
                    })
                    .catch((err) => {
                        alert(err.message)
                    })
            )
        }
    )
}

//to aving loading option while the data is being fetched
export const dataLoading = () => {
    return {
        type: "DATA_LOADING"
    }
}

//to send all dishes data to reducer
export const allDishes = (dishes) => {
    return {
        type: "ALL_DISHES",
        payload: dishes
    }
}

export const removeAllDishes = () => {
    return {
        type: "REMOVE_ALL_DISHES"
    }
}