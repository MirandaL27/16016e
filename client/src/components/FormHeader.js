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
      '@media (max-width: 300px)': {
        marginRight: '15px',
        fontSize: 8
      },
      lineHeight: '19px'
    },
    link: {
      textDecoration: 'none'
    },
    createAccountButton: {
      marginTop: '49px',
      marginRight: '74px',
      '@media (max-width:780px)':{
        marginTop: '15px',
        marginRight: '30px',
        fontSize: 10
      },
      '@media (max-width: 300px)': {
        marginRight: '15px'
      },
      padding: '16px 32px 19px 34px',
      boxShadow: '0px 2px 12px rgba(74, 106, 149, 0.2)',
      borderRadius: '5px',
      color: 'rgb(58, 141, 255)',
      fontSize: 14,
      fontWeight: "600",
      lineHeight: '19px'
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

