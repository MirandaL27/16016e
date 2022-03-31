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
    color: 'rgb(176,176,176)',
    fontSize: 14,
    weight: '400',
    paddingTop: '46px',
    paddingRight: '30px',
    '@media (max-width: 500px)': {
      marginRight: '15px',
      fontSize: 8,
      paddingTop: '15px'
    },
    lineHeight: '19px'
  },
  link: {
    textDecoration: 'none'
  },
  createAccountButton: {
    marginTop: '49px',
    marginRight: '74px',
    '@media (max-width:780px)': {
      marginTop: '15px',
      marginRight: '30px',
      fontSize: 10
    },
    '@media (max-width: 300px)': {
      marginRight: '15px'
    },
    boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
    borderRadius: '5px',
    color: 'rgb(58, 141, 255)',
    fontSize: 14,
    fontWeight: "600",
    lineHeight: '19px'
  },
  buttonPadding1: {
    padding: '16px 32px 19px 34px',
    '@media (max-width: 500px)': {
      padding: '16px 16px 19px 16px'
    }
  },
  buttonPadding2: {
    padding: '16px 52px 19px 52px',
    '@media (max-width: 500px)': {
      padding: '16px 25px 19px 25px'
    }
  },
  topButtonBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '15%',
    '@media (max-width: 500px)': {
      height: '10%'
    }
  }
}));

const FormHeader = ({ question, btnText, link }) => {
  const classes = useStyles();
  return (
    <Grid container alignItems='center' className={classes.topButtonBox}>
      <Typography className={classes.greyFont}>{question}</Typography>
      <Link href={link} to={link} className={classes.link}>
        <Button className={`${classes.createAccountButton} ${(btnText.includes("Login") ? classes.buttonPadding2 : classes.buttonPadding1)}`}>{btnText}</Button>
      </Link>
    </Grid>
  );
}

export default FormHeader;

