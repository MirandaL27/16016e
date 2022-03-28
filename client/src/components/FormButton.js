import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
    Grid,
    Button
  } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    submitButton: {
      color: 'white',
      fontSize: 16,
      fontWeight: "700",
      lineHeight: '24px',
      backgroundColor: 'rgb(58, 141, 255)',
      padding: '18px 58px 14px 58px',
      borderRadius: '3px',
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
