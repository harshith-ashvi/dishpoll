import { Container } from "@mui/material";
import React from "react";
import MyDishes from "../dishes/MyDishes";
import PollTable from "../poll/PollTable";

const Poll = (props) => {
    return (
        <Container sx={{mb: 6}}>
            <MyDishes/>
            <PollTable/>
        </Container>
    )
}

export default Poll