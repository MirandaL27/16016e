import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import {
    Grid,
    Typography,
    Button,
  } from '@material-ui/core';

  const useStyles = makeStyles((theme) => ({
    greyFont: {
      color: 'rgb(192,193,194)',
      fontSize: 20,
      padding: '40px',
      lineHeight: 1.5
    },
    link: {
      textDecoration: 'none'
    },
    createAccountButton: {
      padding: '20px 50px 20px 50px',
      boxShadow: '0px 8px 10px rgb(230, 238, 250), -1px 1px 5px rgb(230, 238, 250), 1px 1px 5px rgb(230, 238, 250);',
      borderRadius: '5px',
      color: 'rgb(58, 141, 255)',
      fontSize: 20,
      lineHeight: 1.5
    },
    topButtonBox: {
      display: 'flex',
      justifyContent: 'flex-end',
      height: '15%'
    }
  }));

  const FormHeader = ({question, btnText, link}) => {
    const classes = useStyles();
      return (
      <Grid container alignItems='center' className={classes.topButtonBox}>
        <Typography className={classes.greyFont}>{question}</Typography>
        <Link href={link} to={link} className={classes.link}>
          <Button className={classes.createAccountButton}>{btnText}</Button>
        </Link>
      </Grid>
      );
  }

  export default FormHeader;

