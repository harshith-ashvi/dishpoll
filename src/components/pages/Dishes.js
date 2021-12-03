import { Container, Paper, Alert, Link } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetDishes } from "../../actions/dishesActions";
import DishesContainer from "../dishes/DishesContainer";
import MyDishes from "../dishes/MyDishes";


const Dishes = (props) => {
    const dispatch = useDispatch()
    const allDishes = useSelector(state => state.dishes.data)
    const user = useSelector(state => state.user.data)

    useEffect(() => {
        if (allDishes.length === 0 && Object.keys(user).length > 0) {
            dispatch(startGetDishes())
        }
    }, [])

    return (
        <Container sx={{mb: 6}}>
            { Object.keys(user).length === 0? (
                <Paper sx={{padding: 5, margin: 5}} elevation={0}>
                    <Alert severity="error">You Need to <Link href="/" underline="hover">Login</Link> first.</Alert>
                </Paper>
            ) : (
                <>
                    <MyDishes/>
                    <DishesContainer/>
                </>
            )}
            
        </Container>
    )
}

export default Dishes