import PhotoCameraBackIcon from "@material-ui/icons/PhotoFilter"
import { useHistory, Link, useLocation } from "react-router-dom"
import { AppBar, Avatar, Toolbar, Typography, Button} from "@material-ui/core";
import useStyles from './styles'
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";


const Navbar = () => {
    const classes = useStyles(); 
    const history = useHistory(); 
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile'))); 
    const dispatch = useDispatch(); 
    const location = useLocation(); 

    useEffect(() => {
      // const token = user?.token; 
      setUser(JSON.parse(localStorage.getItem('profile')))
    }, [location])

    const logout = () => {
      dispatch({type: "LOGOUT"})
      history.push("/")
      setUser(null)
    }

    return (
      <AppBar className={classes.appBar} position="sticky">
        <PhotoCameraBackIcon className={classes.photoIcon}/>
        <Typography component={Link} to="/" className={classes.heading} variant="h4" align="center">Memories</Typography>
        <Toolbar className={classes.toolbar} sx={{ display: 'inline' }}>
            {user ? (
            <div className={classes.profile}>
              <Avatar className={classes.avatar} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
              <Typography className={classes.userName} variant="h6">{user.result.name} </Typography>
              <Button variant="contained" className={classes.logout} color="secondary" onClick={logout}>Logout</Button>
              </div>
            ) : (
              <Button component={Link} to="/auth" variant="contained">Login</Button>
            ) }
        </Toolbar>
      </AppBar>
    )
}

export default Navbar
