import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import DateFnsUtils from '@date-io/date-fns';
import {
    MuiPickersUtilsProvider,
    KeyboardDatePicker,
} from '@material-ui/pickers';
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Card from '@material-ui/core/Card'
import { useRouter} from 'next/router'

const useStyles = makeStyles({
  field: {
      marginTop: 20,
      marginBottom: 20,
      display: 'block'
  },
  box: {
    margin: 'auto',
    padding: '30px',
    borderRadius: '10px',
    ['@media (max-width:399px)']: {
      width: '100',
      marginTop: 80,
  }
  }
})


export default function Create() {

    const classes = useStyles()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
    const [selectedDate, setSelectedDate] = useState(new Date('2021-05-02'));
	  const router = useRouter()
	
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };

    const getDateFromForm = () => {
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
          let date = getDateFromForm();
            fetch('http://localhost:8000/notes', {
                method: 'POST',
                headers: { "Content-type": "application/json" },
                body: JSON.stringify({ title, description, date })
            }).then(() => router.push('/blog')).catch(() => router.push('/blog'))
        }
    }

    return (
      <div className="container">
        <Head>
          <title>Kup BSV</title>
          <link rel="icon" href="/bsvlogo.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>
        <Header/>
        <main>
          <Container>
            <Card elevation={5} className={classes.box}>
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
                  variant="outlined"
                  endIcon={<KeyboardArrowRightIcon />}>
                  Dodaj
                </Button>
                </form>
            </Card>
          </Container>
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
          }
          main {
            margin: 100px 30px 50px 30px;
          }
          @media only screen and (max-width: 499px) {
            main {
              margin: 120px 7px;
            }
          }
        `} </style>
      </div>
    )
}