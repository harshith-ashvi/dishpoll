import React from "react";
import { Box } from "@mui/system";
import {  Container, Link, Paper, Typography } from "@mui/material";
import notFound from "./../../assets/notFound.png"

const homePageStyle = {
    backgroundImage: `url(${notFound})`,
    backgroundSize: "cover",
    width: 700,
    height: 500,
    display: "flex",
    justifyContent: "center"
}

const NotFound = (props) => {
    return (
        <Container>
            <Box sx={{display: "flex", justifyContent: "center", mt: 8, alignContent: "column"}}>
                <Paper sx={homePageStyle}>
                    <Typography variant="h3">
                        Page not found. 
                        <Link href="/" underline="hover">Login</Link>
                    </Typography>
                </Paper>
            </Box>
        </Container>
    )
}

export default NotFound