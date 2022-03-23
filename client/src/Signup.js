import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import image from '../src/assets/bg-img.png';
import svg from '../src/assets/bubble.svg';
import {
  Grid,
  Box,
  Typography,
  Button,
  FormControl,
  TextField,
  FormHelperText,
} from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex"
  },
  boxImage: {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    height: '100vh',
    width: '35%',
    display: 'flex',
    alignItems: "flex-end",
    justifyContent: 'center'
  },
  boxText: {
    width: '60%'
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: '30px'
  },
  textBox: {
    borderStyle: 'none',
    outline: 'none',
    border: '2px solid grey'
  },
  greyFont: {
    color: 'grey',
    fontSize: 15,
    padding: '15px'
  },
  link: {
    textDecoration: 'none'
  },
  createAccountButton: {
    padding: '15px 30px 15px 30px',
    boxShadow: '0px 8px 10px rgb(230, 238, 250), -1px 1px 5px rgb(230, 238, 250), 1px 1px 5px rgb(230, 238, 250);',
    borderRadius: '5px',
    color: 'rgb(52, 125, 235)'
  },
  submitButton: {
    color: 'white',
    backgroundColor: 'rgb(52, 125, 235)',
    padding: '15px 70px 15px 70px'
  },
  bubbleBox: {
    color: 'white',
    textAlign: 'center',
    height: '60%',
  },
  vertCenterBox: {
    display: 'flex',
    flexDirection: 'column',
    height: '60%',
    width: '100%'
  },
  topButtonBox: {
    display: 'flex',
    justifyContent: 'flex-end',
    height: '15%'
  },
  image: {
    marginBottom: '25px'
  },
  whiteFont: {
    fontSize: 25
  },
  textField: {
    paddingBottom: '30px'
  }
}));


const Signup = ({ user, register }) => {
  const history = useHistory();
  const classes = useStyles();
  const [formErrorMessage, setFormErrorMessage] = useState({});

  const handleRegister = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const email = formElements.email.value;
    const password = formElements.password.value;
    const confirmPassword = formElements.confirmPassword.value;

    if (password !== confirmPassword) {
      setFormErrorMessage({ confirmPassword: 'Passwords must match' });
      return;
    }
    await register({ username, email, password });
  };

  useEffect(() => {
    if (user && user.id) history.push('/home');
  }, [user, history]);

  return (
    <Grid container className={classes.root}>
      <Box className={classes.boxImage}>
        <Box className={classes.bubbleBox}>
          <img alt="" src={svg} className={classes.image} />
          <Typography className={classes.whiteFont}>Converse with anyone</Typography>
          <Typography className={classes.whiteFont}>with any language</Typography>
        </Box>
      </Box>
      <Grid container justifyContent="center" className={classes.boxText}>
        <Grid container alignItems='center' className={classes.topButtonBox}>
          <Typography className={classes.greyFont}>Already have an account?</Typography>
          <Link href="/login" to="/login" className={classes.link}>
            <Button className={classes.createAccountButton}>Login</Button>
          </Link>
        </Grid>
        <Box width='70%' height="60%">
          <Box container className={classes.vertCenterBox}>
            <Grid container item>
              <Typography className={classes.title}>Create an account.</Typography>
            </Grid>
            <form onSubmit={handleRegister}>
              <Grid>
                <Grid className={classes.textField}>
                  <FormControl fullWidth>
                    <TextField fullWidth
                      aria-label="username"
                      label="Username"
                      name="username"
                      type="text"
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid className={classes.textField}>
                  <FormControl fullWidth>
                    <TextField fullWidth
                      label="E-mail address"
                      aria-label="e-mail address"
                      type="email"
                      name="email"
                      required
                    />
                  </FormControl>
                </Grid>
                <Grid className={classes.textField}>
                  <FormControl error={!!formErrorMessage.confirmPassword} fullWidth>
                    <TextField fullWidth
                      aria-label="password"
                      label="Password"
                      type="password"
                      inputProps={{ minLength: 6 }}
                      name="password"
                      required
                    />
                    <FormHelperText>
                      {formErrorMessage.confirmPassword}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid className={classes.textField}>
                  <FormControl error={!!formErrorMessage.confirmPassword} fullWidth>
                    <TextField fullWidth
                      label="Confirm Password"
                      aria-label="confirm password"
                      type="password"
                      inputProps={{ minLength: 6 }}
                      name="confirmPassword"
                      required
                    />
                    <FormHelperText>
                      {formErrorMessage.confirmPassword}
                    </FormHelperText>
                  </FormControl>
                </Grid>
                <Grid container justifyContent='center'>
                  <Button type="submit" variant="contained" size="large" className={classes.submitButton}>
                    Create
                  </Button>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
