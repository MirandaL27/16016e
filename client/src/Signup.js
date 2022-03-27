import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Banner from './components/Banner';
import FormHeader from './components/FormHeader';
import FormButton from './components/FormButton';
import {
  Grid,
  Box,
  FormControl,
  TextField,
  FormHelperText,
} from '@material-ui/core';
import FormTitle from './components/FormTitle';


const Signup = ({ user, register, useStyles}) => {
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
      <Banner />
      <Grid container justifyContent="center" className={classes.boxText}>
        <FormHeader question="Already have an account?" btnText='Login' link='/login'/>
        <Box width='70%' height="60%">
          <Box container className={classes.vertCenterBox}>
            <FormTitle titleText='Create an account.'/>
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
                <FormButton btnText="Create"/>
              </Grid>
            </form>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
};

export default Signup;
