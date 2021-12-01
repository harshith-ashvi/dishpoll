import axios from "axios";

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

export const dataLoading = () => {
    return {
        type: "DATA_LOADING"
    }
}

export const allDishes = (dishes) => {
    return {
        type: "ALL_DISHES",
        payload: dishes
    }
}