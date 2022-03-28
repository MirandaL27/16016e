import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography
  } from '@material-ui/core';


  const useStyles = makeStyles((theme) => ({
    title: {
      fontSize: '26px',
      '@media (max-width:780px)':{
        fontSize: '15px'
      },
      fontWeight: "600",
      marginBottom: '49px',
      height: '40px',
      lineHeight: '40px'
    }
  }));

const FormTitle = ({titleText}) => {
    const classes = useStyles();
    return (
        <Grid container item>
            <Typography className={classes.title}>{titleText}</Typography>
        </Grid>
    );
}

export default FormTitle;
