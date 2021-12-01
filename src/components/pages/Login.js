import { Avatar, Container, Typography, Grid, TextField, Button } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { addUser, clearError, userError } from "../../actions/userAction";

const mainBoxStyle = {
    mt: 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
}

const avatarStyle = {
    m: 1,
    bgcolor: "secondary.main"
}

const validationSchema = Yup.object({
    username: Yup
        .string()
        .required("Username cannot be empty"),
    password: Yup
        .string()
        .required("Password cannot be empty")
})

const Login = (props) => {
    const dispatch = useDispatch()
    const loginError = useSelector(state => state.user.errors)

    useEffect(() => {
        dispatch(clearError())
    }, [])

    const redirectLogin = () => {
        props.history.push("/")
    }

    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema,
        validateOnChange: false,
        onSubmit: (values, { resetForm }) => {
            const users = JSON.parse(localStorage.getItem("users"))
            const findUser = users.find((user) => (user.username === values.username) && (user.email === values.email))
            if (findUser) {
                console.log(findUser)
                localStorage.setItem("user", findUser.id)
                dispatch(clearError())
                dispatch(addUser(findUser))
                resetForm()
                redirectLogin()
            } else {
                dispatch(userError({"errors": "User not found/Invalid email or password"}))
            }
        }
    })

    return (
        <Container component="main" maxWidth="xs">
            <Box sx={mainBoxStyle}>
                <Avatar sx={avatarStyle}>
                    <LockOutlinedIcon/>
                </Avatar>
                <Typography variant="h4" component="h1">
                    Login
                </Typography>
                <Box component="form" noValidate sx={{mt: 3}} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField 
                                variant="outlined"
                                label="Username"
                                name="username"
                                fullWidth
                                required
                                value={values.username}
                                onChange={handleChange}
                                error={errors.hasOwnProperty("username")}
                                helperText={errors.username && errors.username}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <TextField 
                                variant="outlined"
                                label="Password"
                                name="password"
                                fullWidth
                                required
                                value={values.password}
                                onChange={handleChange}
                                error={errors.hasOwnProperty("password")}
                                helperText={errors.password && errors.password}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="subtitle1" gutterBottom sx={{color: "red"}}>
                                { loginError.errors && loginError.errors }
                            </Typography>
                        </Grid>

                        <Grid item xs={12}>
                            <Button 
                                variant="contained"
                                type="submit"
                                fullWidth
                                sx={{ mt: 1, mb: 2 }}
                                color="primary"
                                endIcon={<KeyboardArrowRightOutlinedIcon/>}
                            >
                                Login
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>
    )
}

export default Login