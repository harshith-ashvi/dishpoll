import { Container } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startGetDishes } from "../../actions/dishesActions";
import DishesContainer from "../dishes/DishesContainer";

const Dishes = (props) => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(startGetDishes())
    }, [])

    return (
        <Container sx={{mb: 6}}>
            <DishesContainer/>
        </Container>
    )
}

export default Dishes