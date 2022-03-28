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
      borderRadius: '3px',
    },
    padding1: {
      padding: '18px 58px 14px 58px'
    },
    padding2 : {
      padding: '18px 53px 14px 54px'
    }
  }));

const FormButton = ({btnText}) => {
    const classes = useStyles();
    return (
        <Grid container justifyContent='center'>
            <Button className={`${classes.submitButton} ${(btnText.includes("Create")? classes.padding2 : classes.padding1)}`} type="submit" variant="contained" size="large">
                {btnText}
            </Button>
        </Grid>
    );
}

export default FormButton;
