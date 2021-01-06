import React, { useEffect, useState } from 'react'
import Box from '@material-ui/core/Box';
import BlogCard from '../components/blogCard';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));



const Blog = () => {
  const [blog, setblog] = useState([]);

  useEffect(() => {
    fetch('https://5ff4584a16cf4f0017c200b5.mockapi.io/api/blog/blogs')
      .then(res => res.json())
      .then(res => {
        setblog(res)
      })
      .catch(e => {
        console.log(e);
      })
  });



  return (
    <React.Fragment>
      <Grid container spacing={1}>
        {blog.map((b, index) => {

          return <Grid item xs={12} sm={3}> <BlogData key={index} blog={b} /></Grid>
        })}
      </Grid>
    </React.Fragment>
  );
}

const BlogData = ({ blog }) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box component="span" m={1} >




        <BlogCard title={blog.title} date={blog.date} message={blog.message} writer={blog.writer} image={blog.image} />



      </Box>
    </React.Fragment>
  )
}



export default Blog;
