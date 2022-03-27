import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Button
  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    submitButton: {
      color: 'white',
      fontSize: 20,
      backgroundColor: 'rgb(58, 141, 255)',
      padding: '20px 70px 20px 70px'
    }
  }));

const FormButton = ({btnText}) => {
    const classes = useStyles();
    return (
        <Grid container justifyContent='center'>
            <Button className={classes.submitButton} type="submit" variant="contained" size="large">
                {btnText}
            </Button>
        </Grid>
    );
}

export default FormButton;
