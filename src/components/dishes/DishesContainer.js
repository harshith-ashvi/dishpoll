import { CircularProgress, Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useSelector } from "react-redux";
import DishItem from "./DishItem";

const DishesContainer = (props) => {
    const dishes = useSelector(state => state.dishes)

    const { isLoading, data } = dishes

    return (
        <Container sx={{mt: 5}}>
            { isLoading? (
                <Box sx={{mt: 6, ml: "50%"}}>
                    <CircularProgress/>
                </Box>
            ) : (
                <>
                    <Typography variant="h4" sx={{mb: 2}}>
                        All Dishes - {data.length}
                    </Typography>
                    <Grid container spacing={2}>
                        { data.map((dish) => {
                            return (
                                <Grid item key={dish.id}>
                                    <DishItem {...dish}/>
                                </Grid>
                            )
                        }) }
                    </Grid>
                </>
            )}
            
        </Container>
    )
}

export default DishesContainer