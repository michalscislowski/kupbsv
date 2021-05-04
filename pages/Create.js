import React, { useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import { useHistory } from 'react-router-dom'
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import { createMuiTheme } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import Brightness2Icon from '@material-ui/icons/Brightness2'; //moon
import Brightness7Icon from '@material-ui/icons/Brightness7'; //sun
import useTheme from '../components/useTheme';
import storage from 'local-storage-fallback';

const useStyles = makeStyles({
  field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
  },
  changeTheme: {
    position: 'absolute',
    top: 100,
    right: 20
  }
})

const themeLight = createMuiTheme({
  palette: {
    type: "light"
  }
});

const themeDark = createMuiTheme({
  palette: {
    type: "dark"
  }
});

export default function Create() {
    const theme = useTheme()
    const classes = useStyles()
    const history = useHistory()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [selectedDate, setSelectedDate] = React.useState(new Date('2021-05-02'));
    const [darkMode, SetDarkMode] = useState()

    useEffect(() => {
      SetDarkMode(getInitialState);
    }, [])

    function getInitialState() {
    const savedTheme = storage.getItem('theme');
      return JSON.parse(savedTheme).mode == "dark"
        ? true
        : false;
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const getCurrentDAte = () => {
      let days = selectedDate.getDate();
      let months = selectedDate.getMonth() + 1;
      let years = selectedDate.getFullYear();

      if (months < 10) {months = "0" + months;}
      let _date = days + "." + months+ "." + years;

      return _date
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setTitleError(false)
        setDetailsError(false)

        if (title == '') {
            setTitleError(true)
        }
        if (description == '') {
            setDetailsError(true)
        }
        if (title && description) {
          let date = getCurrentDAte();
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ title, description, date })
            })
        }
    }

    return (
    <ThemeProvider theme={darkMode ? themeDark : themeLight}>
      <div className="container">
        <Head>
          <title>Kup BSV</title>
          <link rel="icon" href="/bsvlogo.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <Header dark="no"/>
        <main className="main">
          <Container>
            <Typography
              variant="h5" 
              color="textSecondary"
              component="h2"
              gutterBottom
            >
              Dodaj post na blogu
            </Typography>
            
            <form noValidate autoComplete="off" onSubmit={handleSubmit}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                  disableToolbar
                  variant="inline"
                  format="MM/dd/yyyy"
                  margin="normal"
                  id="date-picker-inline"
                  label="Data publikacji"
                  value={selectedDate}
                  onChange={handleDateChange}
                  KeyboardButtonProps={{
                      'aria-label': 'change date',
                  }}
              />
              </MuiPickersUtilsProvider>
              <TextField className={classes.field}
                onChange={(e) => setTitle(e.target.value)}
                label="Tytuł" 
                variant="outlined" 
                color="primary" 
                fullWidth
                required
                error={titleError}
                onBlur={(e) => {
                  setDetailsError(false);
                  setTitleError(false);
                }}
              />
              <TextField className={classes.field}
                onChange={(e) => setDescription(e.target.value)}
                label="Treść"
                variant="outlined"
                color="primary"
                multiline
                rows={4}
                fullWidth
                required
                error={detailsError}
                helperText="Oba pola muszą być wypełnione."
              />
              <Button
                type="submit" 
                color="default" 
                variant={darkMode ? "outlined" : "contained"}
                endIcon={<KeyboardArrowRightIcon />}>
                Dodaj
              </Button>
              </form>
          </Container>
          <Button className={classes.changeTheme}
            variant={darkMode ? "outlined" : "contained"} 
            onClick={() => {
              SetDarkMode(!darkMode); 
              theme.setTheme(
                theme.mode === 'dark'
                    ? { ...theme, mode: 'light' }
                    : { ...theme, mode: 'dark' }
                )}
              }>
              {darkMode ? <Brightness2Icon style={{transform: 'scaleX(-1)'}}/> : <Brightness7Icon />}
          </Button>
        </main>
        <div className="stopa">
          <Footer/>
        </div>
        <style jsx> {`
          .stopa {
            width: 100%;
            position: absolute;
            bottom:0;
            left: 0;
          }
          .container {
            height: 100vh;
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: stretch;
            flex-direction: column;
            background: ${darkMode ? "#0a0e12" : '#eee'};
            overflow: hidden;
            transition: 0.5s;
          }
          .main {
            margin: 120px 30px;
          }
        `} </style>
      </div>
    </ThemeProvider>
    )
}