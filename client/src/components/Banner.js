import React from 'react';
import svg from '../assets/bubble.svg';
import image from '../assets/bg-img.png';
import { makeStyles } from '@material-ui/core/styles';
import {
    Box,
    Typography
  } from '@material-ui/core';
  
const useStyles = makeStyles((theme) => ({
    boxImage: {
        backgroundImage: `linear-gradient(to bottom, rgba(58, 141, 255, 0.80), rgba(121, 168, 242, 0.80)), url(${image})`,
        backgroundSize: 'cover',
        height: '100vh',
        width: '35%',
        display: 'flex',
        alignItems: "flex-end",
        justifyContent: 'center'
      },
    bubbleBox: {
      color: 'white',
      textAlign: 'center',
      height: '60%',
    },
    image: {
      marginBottom: '25px'
    },
    whiteFont: {
      fontSize: 25
    },
  }));


const Banner = () => {
    const classes = useStyles();
    return (
    <Box className={classes.boxImage}>
        <Box className={classes.bubbleBox}>
            <img alt="" src={svg} className={classes.image} />
            <Typography className={classes.whiteFont}>Converse with anyone</Typography>
            <Typography className={classes.whiteFont}>with any language</Typography>
        </Box>
    </Box>
    );
}
export default Banner;
