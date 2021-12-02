import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import dishesReducer from "../reducers/dishesReducer"
import favoriteDishesReducer from "../reducers/favoriteDishesReducer"
import userReducer from "../reducers/userReducer"

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        dishes: dishesReducer,
        favoriteDishes: favoriteDishesReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore