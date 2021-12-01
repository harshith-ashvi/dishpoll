import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import dishesReducer from "../reducers/dishesReducer"
import userReducer from "../reducers/userReducer"

const configureStore = () => {
    const store = createStore(combineReducers({
        user: userReducer,
        dishes: dishesReducer
    }), applyMiddleware(thunk))
    return store
}

export default configureStore