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
      '@media (max-width:300px)': {
        fontSize: '12px'
      },
      fontWeight: "600",
      height: '40px',
      lineHeight: '40px'
    },
    margin1: {
      marginBottom: '49px',
      '@media (max-width: 500px)':{
        marginBottom: '15px'
    }
    },
    margin2: {
      marginBottom: '28px',
      '@media (max-width: 500px)':{
        marginBottom: '15px'
    }
    }
  }));

const FormTitle = ({titleText}) => {
    const classes = useStyles();
    return (
        <Grid container item>
            <Typography className={`${classes.title} ${(titleText.includes('Create')? classes.margin2: classes.margin1)}`}>{titleText}</Typography>
        </Grid>
    );
}

export default FormTitle;
