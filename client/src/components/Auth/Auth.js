import { useState } from "react"
import {Avatar, Button, Paper, Grid, Typography, Container} from "@material-ui/core"
import LockOutlinedIcon from "@material-ui/icons/LockOutlined"
import useStyles from './styles'
import Input from "./Input"
import GoogleLogin from "react-google-login"
import { useDispatch } from "react-redux"
import { AUTH } from "../../constants/actionTypes"
import { useHistory } from "react-router"


const Auth = () => {
    const classes = useStyles(); 
    const history = useHistory(); 
    const dispatch = useDispatch(); 
    const [showPassword, setShowPassword] = useState(false);
    const handleShwoPassword = () => { 
        setShowPassword((prevShowPassword) => !prevShowPassword)
    }
    const [isSignup, setIsSignup] =  useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }
    const handleChange = () => {

    }
    const switchMode = () => {
        setIsSignup((prevIsSignup) => !prevIsSignup)
        handleShwoPassword(false); 
    }
    // GOOGLE AUTH 
    const googleSuccess = async (res) => {
        const result = res?.profileObj; 
        const token = res?.tokenId;
        try {
            dispatch({type: AUTH, data: {result, token}})
            history.push("/")
        } catch (error) {
            console.log(error);
        }
        
    }

    const googleFailure = async (error) => {
        console.log("Google Login Error");
    }
    return (
        <Container component="main" maxWidth="xs">
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />  
                </Avatar>
            <Typography variant="h5">{isSignup ? "Sign up" : "Sign in"} </Typography>
            <form className={classes.form} onSubmit={handleSubmit}>
                <Grid container spacing={2}>
                    {
                        isSignup && (
                            <>
                            <Input name="firstName" label="First Name" handleChange={handleChange} autoFocus half />
                            <Input name="lastName" label="Last Name" handleChange={handleChange} half />
                            </>
                        )
                    }
                    <Input name="email" label="Email Address" handleChange={handleChange} type="email"/>
                    <Input name="password" label="Password"  handleChange={handleChange} type={showPassword ? "text" : "password" } handleShwoPassword={handleShwoPassword}/>
                    {isSignup && <Input name="confirmPassword" label = "Repeat Password" handleChange={handleChange} type="password"/>}
                </Grid>
                <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                     {isSignup ? "Sign up" : "Sign in"} 
                </Button>
                {!isSignup && 
                <GoogleLogin  className={classes.googleButton}
                clientId={process.env.REACT_APP_CLIENTID}
                onSuccess= {googleSuccess}
                onFailure = {googleFailure}
                cookiePolicy = "single_host_origin"
                />
                }
                <Grid container justifyContent="flex-end">
                    <Grid item>
                        <Button onClick={switchMode}>
                            {isSignup ? "Already have an account? Sign in" : "Don't have an account? Sign up"}
                        </Button>
                    </Grid>
            </Grid>
            </form>
            </Paper>
        </Container>
    )
}

export default Auth
