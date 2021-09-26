import React from 'react'
import { useSelector } from 'react-redux'
import Post from './Post/Post'
import useStyles from './styles'
import { CircularProgress, Grid } from '@material-ui/core'
// import reducers from '../../reducers';

const Posts = () => {

    const classes = useStyles(); 
    const posts = useSelector((state) => state.posts); 
    console.log(posts);
    return (
        !posts.length ? <CircularProgress /> : (
            <Grid className={classes.container} container alignItems="stretch" spacing={3}>
                {posts.map((post) => (
                    <Grid key={post._id} xs={12} sm={6} item>
                        <Post post={ post }/>
                    </Grid>
                ))}
                 </Grid>
        )
    )
}

export default Posts
