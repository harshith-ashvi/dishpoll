import { Container, Paper, Alert, Link } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startGetDishes } from "../../actions/dishesActions";
import DishesContainer from "../dishes/DishesContainer";
import MyDishes from "../dishes/MyDishes";
import { getAllFavDishes } from "../../actions/favoriteDishesActions";


const Dishes = (props) => {
    const dispatch = useDispatch()
    const allDishes = useSelector(state => state.dishes.data)
    const user = useSelector(state => state.user.data)

    useEffect(() => {
        if (allDishes.length === 0 && Object.keys(user).length > 0) {
            dispatch(startGetDishes())
            //to get favourite dishes of user form localStorage
            const favDishes = JSON.parse(localStorage.getItem("favDishes"))
            const userId = JSON.parse(localStorage.getItem("user"))
            if(favDishes === null){
                localStorage.setItem("favDishes", JSON.stringify({}))
            } else if (favDishes.hasOwnProperty(userId)) {
                const currentUserFavDishes = favDishes[userId]
                dispatch(getAllFavDishes(currentUserFavDishes))
            }
        }
        
    }, [])

    return (
        <Container sx={{mb: 6}}>
            { Object.keys(user).length === 0? (
                <Paper sx={{padding: 5, margin: 5}} elevation={0}>
                    {/*Alert if user not logged in*/}
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