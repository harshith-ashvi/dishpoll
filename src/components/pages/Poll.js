import { Container, Paper, Alert, Link } from "@mui/material";
import React from "react";
import MyDishes from "../dishes/MyDishes";
import PollTable from "../poll/PollTable";
import { useSelector } from "react-redux";

const Poll = (props) => {
    const user = useSelector(state => state.user.data)

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
                    <PollTable/>
                </>
            )}
        </Container>
    )
}

export default Poll