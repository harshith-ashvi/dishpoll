import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startGetDishes } from "../../actions/dishesActions";
import { getAllFavDishes } from "../../actions/favoriteDishesActions";
import DishesContainer from "../dishes/DishesContainer";


const Dishes = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetDishes())
        const favDishes = JSON.parse(localStorage.getItem("favDishes"))
        const userId = JSON.parse(localStorage.getItem("user"))
        if(favDishes === null){
            localStorage.setItem("favDishes", JSON.stringify({}))
        } else if (favDishes.hasOwnProperty(userId)) {
            const currentUserFavDishes = favDishes[userId]
            dispatch(getAllFavDishes(currentUserFavDishes))
        }
    }, [])

    return (
        <Container sx={{mb: 6}}>
            <DishesContainer/>
        </Container>
    )
}

export default Dishes