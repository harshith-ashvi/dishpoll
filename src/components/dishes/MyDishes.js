import { Container, Paper, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import { findDishPointsViaValue } from "../../helper functions/findDishPoints";

const MyDishes = (props) => {
    const favDishes = useSelector(state => state.favoriteDishes)

    return (
        <Container sx={{mt: 5}}>
            <Paper elevation={0}>
                <Typography variant="h4" sx={{mb: 2}} gutterBottom>
                    My Dishes - {favDishes.length}
                </Typography>
                <Box sx={{mt: 2, mb: 2, ml: 4}}>
                    <Typography variant="h6" gutterBottom>
                        30 Points / Rank 1 : { findDishPointsViaValue(favDishes, 30) }
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        20 Points / Rank 2 : { findDishPointsViaValue(favDishes, 20) }
                    </Typography>
                    <Typography variant="h6" gutterBottom>
                        10 Points / Rank 3 : { findDishPointsViaValue(favDishes, 10) }
                    </Typography>
                </Box>
            </Paper>
        </Container>
    )
}

export default MyDishes