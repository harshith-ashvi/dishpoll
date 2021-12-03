import React from "react";
import { Box } from "@mui/system";
import { AppBar, Toolbar, Typography, Button } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { removeUser } from "../actions/userAction";
import { removeAllDishes } from "../actions/dishesActions";


const Navbar = (props) => {
    const user = useSelector(state => state.user.data) || {}
    const dispatch = useDispatch()
    const history = useHistory()

    const handleLogout = () => {
        alert("Successfully logged out")
         //remove user details, dish and favourite dish details after logout
        dispatch(removeUser())
        dispatch(removeAllDishes())
        localStorage.removeItem("user")
        history.push("/")
    }

    const handleClick = (route) => {
        history.push(route)
    }

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" component="div" sx={{ flexGrow: 1 }}>
                        DishPoll
                    </Typography>
                    { Object.keys(user).length > 0 && (
                        <>
                            <Button color="inherit" onClick={() => handleClick("/dishes")}>Dishes</Button>
                            <Button color="inherit" onClick={() => handleClick("/poll")}>Poll</Button>
                            <Button color="inherit" onClick={handleLogout}>Logout</Button>
                        </>
                    ) }
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Navbar