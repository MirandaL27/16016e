import React, { useEffect } from 'react';
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
    paddingBottom: '40px'
  }
}));

const Login = ({ user, login }) => {
  const history = useHistory();
  const classes = useStyles();

  const handleLogin = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formElements = form.elements;
    const username = formElements.username.value;
    const password = formElements.password.value;

    await login({ username, password });
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
      <Grid container justifyContent='center' className={classes.boxText}>
        <Grid container alignItems='center' className={classes.topButtonBox}>
          <Typography className={classes.greyFont}>Don't have an account?</Typography>
          <Link href="/register" to="/register" className={classes.link}>
            <Button className={classes.createAccountButton}>Create Account</Button>
          </Link>
        </Grid>
        <Box width='70%' height="60%">
          <Box container className={classes.vertCenterBox}>
            <Grid container item>
              <Typography className={classes.title}>Welcome Back!</Typography>
            </Grid>
            <form onSubmit={handleLogin} width="100%">
              <Grid>
                <Grid className={classes.textField}>
                  <FormControl fullWidth margin="normal" >
                    <TextField fullWidth
                      aria-label="Username"
                      label="Username"
                      name="username"
                      type="text"
                    />
                  </FormControl>
                </Grid>
                <Grid className={classes.textField}>
                  <FormControl margin="normal" fullWidth required >
                    <TextField fullWidth
                      label="Password"
                      aria-label="Password"
                      type="password"
                      name="password"
                    />
                  </FormControl>
                </Grid>
                <Grid container justifyContent='center'>
                  <Button className={classes.submitButton} type="submit" variant="contained" size="large">
                    Login
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

export default Login;
