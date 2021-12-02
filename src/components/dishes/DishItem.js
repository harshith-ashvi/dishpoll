import { Card, CardActions, CardContent, CardMedia, FormControl, MenuItem, Select, Typography, InputLabel } from "@mui/material";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addFavDish, removeDish, replaceFavDish } from "../../actions/favoriteDishesActions";
import initialDishValue from "../../helper functions/initialDishValue";

const DishItem = (props) => {
    const { id, dishName, description, image } = props

    const favDishes = useSelector(state => state.favoriteDishes)

    const [ points, setPoints ] = useState(() => {
        return initialDishValue(favDishes, id, "")
    })

    const dispatch = useDispatch()

    useEffect(() => {
        const selectedDishes = JSON.parse(localStorage.getItem("favDishes"))
        const userId = JSON.parse(localStorage.getItem("user"))
        if (points !== ""){
            if (selectedDishes.hasOwnProperty(userId)) {
                const currentUserFavDishes = selectedDishes[userId]
                const dishValueAvaliable = currentUserFavDishes.find((dish) => dish.value === points)
                let updateFavDishes
                if (dishValueAvaliable) {
                    updateFavDishes = currentUserFavDishes.map((dish) => {
                        if (dish.value === points) {
                            return {...props, value: points}
                        } else {
                            return {...dish}
                        }
                    })
                    dispatch(replaceFavDish({...props, value: points}))
                } else {
                    updateFavDishes = [...currentUserFavDishes, {...props, value: points}]
                    dispatch(addFavDish({...props, value: points}))
                }
                
                const allUserFavDish = {...selectedDishes, [userId]: updateFavDishes}
                localStorage.setItem("favDishes", JSON.stringify(allUserFavDish))
            } else {
                const allUserFavDish = {...selectedDishes, [userId]: [{...props, value: points}]}
                localStorage.setItem("favDishes", JSON.stringify(allUserFavDish))
            }
        }
        
    }, [points])

    const handlePoints = (e) => {
        const dishPoints = e.target.value
        setPoints(dishPoints)
        if (dishPoints === "") {
            const selectedDishes = JSON.parse(localStorage.getItem("favDishes"))
            const userId = JSON.parse(localStorage.getItem("user"))
            const currentUserFavDishes = selectedDishes[userId]
            const afterRemovedDishes = currentUserFavDishes.filter((dish) => dish.id !== id)
            const allUserFavDish = {...selectedDishes, [userId]: afterRemovedDishes}
            dispatch(removeDish(id))
            localStorage.setItem("favDishes", JSON.stringify(allUserFavDish))
        }
    }

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
            <CardActions>
                <FormControl fullWidth>
                    <InputLabel>Points/Rank</InputLabel>
                    <Select
                        label="Points/Rank"
                        value={points}
                        onChange={handlePoints}
                    >
                        <MenuItem value={""}>None</MenuItem>
                        <MenuItem value={30}>30 Points / Rank 1</MenuItem>
                        <MenuItem value={20}>20 Points / Rank 2</MenuItem>
                        <MenuItem value={10}>10 Points / Rank 3</MenuItem>
                    </Select>
                </FormControl>
            </CardActions>
        </Card>
    )
}

export default DishItem