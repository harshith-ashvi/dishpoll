import { Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import React from "react";

const DishItem = (props) => {
    const { id, dishName, description, image } = props

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                component="img"
                height="140"
                image={image}
                alt={dishName}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {dishName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    )
}

export default DishItem