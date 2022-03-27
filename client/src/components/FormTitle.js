import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Typography
  } from '@material-ui/core';

  const useStyles = makeStyles((theme) => ({
    title: {
      fontSize: 30,
      fontWeight: "bold",
      marginBottom: '30px'
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
