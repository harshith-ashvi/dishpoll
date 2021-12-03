import { Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import React from "react";
import { useSelector } from "react-redux";
import { pollFormatData } from "../../helper functions/pollFormatData";
import { findDishPointsViaId } from "../../helper functions/findDishPoints";

const columns = [
    {id: "slNo", label: "Sl. No.", minWidth: 150},
    {id: "dishName", label: "Dish Name", minWidth: 180},
    {id: "points", label: "Points", minWidth: 180},
    {id: "myPoints", label: "My Points", minWidth: 180}
]

const PollTable = (props) => {
    const allFavDishes = JSON.parse(localStorage.getItem("favDishes"))
    const allDishes = useSelector(state => state.dishes.data)
    const userFavDishes = useSelector(state => state.favoriteDishes)

    const sortedDishes = pollFormatData(allFavDishes, allDishes)

    return (
        <Container sx={{mt: 5}}>
            <Typography variant="h4" sx={{mb: 2}}>
                Favorite Dishes votes (Points)
            </Typography>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                    <Table stickyHeader>
                        <TableHead>
                            <TableRow>
                                { columns.map((column) => {
                                    return (
                                        <TableCell
                                            key={column.id}
                                            align="center"
                                            sx={{ minWidth: column.minWidth }}
                                        >
                                            {column.label}
                                        </TableCell>
                                    )
                                }) }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            { sortedDishes.map((dish, i) => {
                                const myPoints = findDishPointsViaId(userFavDishes, dish.id)
                                return (
                                    <TableRow
                                        key={dish.id}
                                        hover
                                        sx={{
                                            color: () => {
                                                if (!myPoints) {
                                                    return "primary"
                                                }
                                            }
                                        }}
                                    >
                                        <TableCell align="center" sx={{
                                            color: () => {
                                                if (!myPoints) {
                                                    return "#000000"
                                                }
                                            }
                                        }}>{i + 1}</TableCell>
                                        <TableCell align="center">{dish.dishName}</TableCell>
                                        <TableCell align="center">{dish.value}</TableCell>
                                        <TableCell align="center">{myPoints}</TableCell>
                                    </TableRow>
                                )
                            }) }
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Container>
    )
}

export default PollTable