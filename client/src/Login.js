import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Banner from './components/Banner';
import FormHeader from './components/FormHeader';
import FormButton from './components/FormButton';
import {
  Grid,
  Box,
  Typography,
  FormControl,
  TextField,
  InputAdornment
} from '@material-ui/core';
import FormTitle from './components/FormTitle';


const Login = ({ user, login, useStyles}) => {
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
      <Banner />
      <Grid container justifyContent='center' className={classes.boxText}>
        <FormHeader question="Don't have an account?" btnText='Create account' link='/register'/>
        <Box width='70%' height="60%">
          <Box container className={classes.vertCenterBox}>
            <FormTitle titleText='Welcome back!'/>
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
                      InputProps={{
                        endAdornment: (
                         <InputAdornment position="end" style={{color: 'rgb(58, 141, 255)'}}>
                           <Typography>Forgot?</Typography>
                         </InputAdornment>
                        )
                       }}
                    />
                  </FormControl>
                </Grid>
                <FormButton btnText="Login"/>
              </Grid>
            </form>
          </Box>
        </Box>
      </Grid>

    </Grid>
  );
};

export default Login;
