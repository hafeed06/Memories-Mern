import './App.css';
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core"
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts';
import useStyles from './styles'
import { getPosts } from './actions/posts'

import memories from "./images/clipart3178822.png"
// import { set } from 'mongoose';


function App() {


  const classes = useStyles(); 
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null)

  useEffect(() => {
      dispatch(getPosts); 
  }, [currentId, dispatch])

  return (
    <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="static" color="inherit">
        <img className={classes.image} src={memories} alt="memories" height="60"></img>
          <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
        </AppBar>
        <Grow in>
          <Container>
            <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
              <Grid item xs={12} sm={7}>
                <Posts setCurrentId={setCurrentId} />
              </Grid>
              <Grid item xs={12} sm={4}>
                <Form currentId={currentId} setCurrentId={setCurrentId} /> 
              </Grid>    
            </Grid>
          </Container>
        </Grow>
    </Container>
  );
}

export default App;
