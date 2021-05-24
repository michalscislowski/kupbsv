import React, { useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Container from '@material-ui/core/Container'
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
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
    marginTop: 80,
    padding: '30px',
    borderRadius: '10px',
    ['@media (max-width:374px)']: {
      width: '100',
      marginTop: 120,
    }
  }
})


export default function Create() {

    const classes = useStyles()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [titleError, setTitleError] = useState(false)
    const [detailsError, setDetailsError] = useState(false)
	  const router = useRouter()
	
    function getTime() {

      let today = new Date();
      let year = today.getFullYear();
      let month = today.getMonth() + 1;
      let day = today.getDay();
      let hours = today.getHours();
      let minutes = today.getMinutes();
      let seconds = today.getSeconds();

      if (hours < 10) {hours = "0" + hours}
      if (minutes < 10) {minutes = "0" + minutes}
      if (seconds < 10) {seconds = "0" + seconds}
      if (month < 10) {month = "0" + month}

      let time = hours + ":" + minutes + ":" + seconds + ", " + day + "." + month + "." + year;
      return time;
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
          let date = getTime();
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
        <div className="wrapper">
          <div><Header/></div>
          <div>
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
          </div>
          <div><Footer/></div>
        </div>
        <style jsx> {`
          .container {
            height: 100vh;
            width: 100%;
          }
          .wrapper {
            height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            align-items: stretch;
          }
        `} </style>
      </div>
    )
}