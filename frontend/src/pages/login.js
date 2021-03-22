import React, { useState } from 'react';
import { Link as LinkN, useHistory } from 'react-router-dom'
import cookie from 'react-cookies'
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  FormControlLabel,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  makeStyles,
  Container,
  CircularProgress
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Copyright from '../components/Copyright/Copyright';

const useStyles = makeStyles((theme) => ({
  page: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: 'url(images/Carousel-3.jpg) no-repeat center center fixed',
    webkitBackgroundSize: 'cover',
    mozBackgroundSize: 'cover',
    oBackgroundSize: 'cover',
    backgroundSize: 'cover',
    width: '100%',
    minHeight: '100vh',
    height: '100%',
    margin: '0'
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: theme.spacing(6),
    borderRadius: '10px',
    backgroundColor: 'rgba(200, 200, 200, 0.6)'
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%',
    marginTop: theme.spacing(1)
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  lien: {
    color: '#3F51B5',
    fontSize: '12px',
    marginLeft: '6px'
  },
  lien1: {
    color: '#564C47',
    fontSize: '12px' 
  }
}));

const Login = () => {
  const classes = useStyles();

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false) 

  const history = useHistory();

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }
  const handlePasswordChange = (e) => {
    setPassword(e.target.value)
  }

  const submit = (e) => {
    setIsLoading(true)
    e.preventDefault()
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ user_email: email, user_password: password })
    }

    fetch("http://localhost:4000/login", requestOptions)
      .then((response) => response.json())
      .then((res) => {
        setIsLoading(false);
        const expires = new Date();
        expires.setDate(Date.now() + 1000 * 60 * 60 * 24 * 7); // 7 days
        cookie.save("token", res.token, {
          path: "/",
        });
        cookie.save("user", res.user, {
          path: "/",
        });
      })
      .then(history.push("/"))
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
      

  }
  

  return (
    <div className={classes.page}>
      <Container component="main" maxWidth="xs" >
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Se connecter
        </Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={handleEmailChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={handlePasswordChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="outlined"
              color="primary"
              className={classes.submit}
              onClick={submit}
            >
              { isLoading ? <CircularProgress /> : "Se connecter"}
          </Button>
            <Grid item xs={12} sm container spacing={3}>
              <Grid item >
                <Link href="#" variant="body2">
                  Mot de passe oublié ?
              </Link>
              </Grid>
              <Grid item className={classes.lien1} justify="center" alignItems="center">
              Vous n'avez pas de compte ? 
                <LinkN to="/register" className={classes.lien} variant="body2">
                  S'inscrire
                </LinkN>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={8}>
          <Copyright />
        </Box>
      </Container>
    </div>
  );
}

export default Login;