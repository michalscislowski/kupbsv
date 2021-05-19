import '../styles/globals.css'
import React, {useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Brightness2Icon from '@material-ui/icons/Brightness2' //moon
import WbSunnyIcon from '@material-ui/icons/WbSunny' //sun
import { makeStyles } from '@material-ui/core'
import useTheme from '../components/useTheme'
import CssBaseline from "@material-ui/core/CssBaseline"
import storage from 'local-storage-fallback'
import {RecoilRoot} from 'recoil'
import {useRouter} from "next/router";
import handleAuthuser from '../components/userAuth/handleauth'


const useStyles = makeStyles({
  changeTheme: {
    position: 'absolute',
    top: 100,
    right: 20,
    ['@media (max-width:499px)']: {
      top: 85,
      right: 5,
    }
  },
  moon: {
    transform: 'scaleX(-1)',
  },
  checkThisOut: {
    position: 'absolute',
    top: 150,
    right: 20,
  }
})

const lightTheme = createMuiTheme({
  palette: {
    type: "light",
    background: {
      default: "#eee"
    },
    text: {
      primary: "#111"
    }
  }
  
});

const darkTheme = createMuiTheme( {
  palette: {
    type: "dark",
    background: {
      default: "#0a0e12",
      paper: "#2c2f34"
    },
    text: {
      primary: "#cdcdcd"
    }
  }
})


export default function MyApp(props) {
  const { Component, pageProps } = props;
  const theme = useTheme();
  const classes = useStyles();
  const [darkMode, SetDarkMode] = useState()
  const router = useRouter();
  const { query } = useRouter();

  useEffect(() => {
    SetDarkMode(getInitialState);
  }, [])

  useEffect(() => {
    const userProfile = async() => { 
        if (!router.isReady) return;
        if (query.code) { 
          await handleAuthuser().then(router.push('/home'));
          
          //router.push('/home');
        }
    }
    userProfile();
  }, [router.isReady])


  function getInitialState() {
  const savedTheme = storage.getItem('theme');
    return JSON.parse(savedTheme).mode == "dark"
      ? true
      : false;
  }

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    console.log(theme.mode);
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles);
    }
  }, []);

  return (
    <React.Fragment>
      <Head>
        <title>My page</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme.mode === 'dark' ? darkTheme : lightTheme}>
        {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
        <CssBaseline />
        <Button className={classes.changeTheme}
          variant= {darkMode ? "outlined" : "contained"}
          onClick={() => {
            SetDarkMode(!darkMode); 
            theme.setTheme(
              theme.mode === 'dark'
                  ? { ...theme, mode: 'light' }
                  : { ...theme, mode: 'dark' }
              )}}>
            {!darkMode ? <Brightness2Icon className={classes.moon}/> : <WbSunnyIcon />}
        </Button>
        <RecoilRoot>
          <Component {...pageProps} />
        </RecoilRoot>
        {/* </Paper> */}
      </ThemeProvider>
    </React.Fragment>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  pageProps: PropTypes.object.isRequired,
};
