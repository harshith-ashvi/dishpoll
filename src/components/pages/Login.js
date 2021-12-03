import { Avatar, Container, Typography, Grid, TextField, Button, InputAdornment, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState, useEffect } from "react";
import KeyboardArrowRightOutlinedIcon from '@mui/icons-material/KeyboardArrowRightOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import * as Yup from "yup";
import { useFormik } from "formik";
import { useDispatch, useSelector } from "react-redux";
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
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

//validation using yup
const validationSchema = Yup.object({
    username: Yup
        .string()
        .required("Username cannot be empty"),
    password: Yup
        .string()
        .required("Password cannot be empty")
})

const Login = (props) => {
    const [ showPassword, setShowPassword ] = useState(false) //to show/hide password
    const dispatch = useDispatch()
    //errors that occured when logging in (if any)
    const loginError = useSelector(state => state.user.errors)

    useEffect(() => {
        //to clear errors on page load (if any)
        dispatch(clearError())
    }, [])

    //to route to different page after successful login
    const redirectLogin = () => {
        props.history.push("/dishes")
    }

    //validation, value initial state, update and errors using formik
    const { handleSubmit, handleChange, values, errors } = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema,
        validateOnChange: false,
        onSubmit: (values, { resetForm }) => {
            const users = JSON.parse(localStorage.getItem("users"))
            const findUser = users.find((user) => ((user.username === values.username) && (user.password === values.password)))
            if (findUser) {
                localStorage.setItem("user", findUser.id)
                alert("Successfully Logged in")
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
                                type={showPassword? "text":"password"}
                                InputProps={{
                                    //to show or hide passord
                                    endAdornment: (
                                        values.password.trim().length > 0 && (
                                            <InputAdornment position="end">
                                                <IconButton onClick={() => setShowPassword(!showPassword)}>
                                                    { showPassword? (
                                                        <VisibilityOutlinedIcon/>
                                                    ) : (
                                                        <VisibilityOffOutlinedIcon/>
                                                    ) }
                                                </IconButton>
                                            </InputAdornment>
                                        )
                                    )
                                }}
                            />
                        </Grid>

                        <Grid item xs={12}>
                            <Typography variant="subtitle1" gutterBottom sx={{color: "red"}}>
                                {/*Display error if email/passord does not match or does not exist */}
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