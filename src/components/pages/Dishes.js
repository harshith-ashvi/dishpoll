import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetDishes } from "../../actions/dishesActions";
import { getAllFavDishes } from "../../actions/favoriteDishesActions";
import DishesContainer from "../dishes/DishesContainer";
import MyDishes from "../dishes/MyDishes";


const Dishes = (props) => {
    const dispatch = useDispatch()
    const allDishes = useSelector(state => state.dishes.data)

    useEffect(() => {
        if (allDishes.length === 0) {
            dispatch(startGetDishes())
        }
    }, [])

    return (
        <Container sx={{mb: 6}}>
            <MyDishes/>
            <DishesContainer/>
        </Container>
    )
}

export default Dishes