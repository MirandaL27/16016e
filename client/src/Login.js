import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Banner from './components/Banner';
import FormHeader from './components/FormHeader';
import FormButton from './components/FormButton';
import { makeStyles } from '@material-ui/core/styles';
import {
  Grid,
  Box,
  Typography,
  FormControl,
  TextField,
  InputAdornment
} from '@material-ui/core';
import FormTitle from './components/FormTitle';

const loginStyles = makeStyles((theme) => ({
  padding1:{
    paddingBottom: '54px',
  },
  padding2: {
    paddingBottom: '60px'
  }
}));


const Login = ({ user, login, useStyles}) => {
  const history = useHistory();
  const classes = useStyles();
  const loginClasses = loginStyles();
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
        <Box width='75.7%' height="63.4%">
          <Box container className={classes.vertCenterBox}>
            <FormTitle titleText='Welcome back!'/>
            <form onSubmit={handleLogin} width="100%">
              <Grid>
                <Grid className={loginClasses.padding1}>
                  <FormControl fullWidth margin="normal">
                    <TextField fullWidth
                      aria-label="Username"
                      label="Username"
                      name="username"
                      type="text"
                      InputLabelProps={{
                        classes: {
                          root: classes.formFontSize,
                        }
                      }}
                    />
                  </FormControl>
                </Grid>
                <Grid className={loginClasses.padding2}>
                  <FormControl margin="normal" fullWidth required>
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
                       InputLabelProps={{
                        classes: {
                          root: classes.formFontSize,
                        }
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
