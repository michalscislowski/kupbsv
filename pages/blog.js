import React, { useState, useEffect } from 'react'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Container from '@material-ui/core/Container'
import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import { CardHeader } from '@material-ui/core'
import IconButton from '@material-ui/core/IconButton'
import DeleteOutlined from '@material-ui/icons/DeleteOutlined'
import Socials from '../components/socials'


const featuredPosts = [
  {
    title: 'Featured post',
    date: 'Nov 12',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vel nunc a ante faucibus fermentum et a lorem. Sed efficitur non enim et laoreet. Suspendisse potenti. Phasellus non augue sed arcu maximus lobortis. Maecenas felis est, tempor quis tempor nec, congue sed massa. Proin sed molestie massa. Aenean eros nulla, placerat ac justo nec, consectetur consequat justo. Donec ornare molestie posuere. Phasellus non sollicitudin risus. Integer faucibus elit convallis metus imperdiet, a sodales nisi molestie. Nam ac ex sodales, faucibus mi quis, scelerisque nibh. Nulla tempus massa eros, vitae euismod nunc posuere sed. Pellentesque non fringilla lorem. Aenean placerat, justo a ornare consectetur, ligula mauris tempor elit, quis posuere risus tellus eget tellus. Maecenas quam elit, eleifend ut metus pharetra, vulputate venenatis lectus. Vivamus posuere, eros id porta tincidunt, tortor orci accumsan diam, nec varius nibh purus lacinia sem. Etiam faucibus augue sit amet varius accumsan. Pellentesque eget felis sit amet diam lobortis ullamcorper feugiat pretium tellus. Vivamus sodales justo eu venenatis venenatis. Pellentesque id diam orci. Donec euismod vehicula libero eu pulvinar. Mauris finibus ex sit amet diam condimentum egestas. Maecenas sit amet eros quis nisi porttitor interdum. Praesent semper odio non elit ullamcorper, ut semper magna varius. Ut imperdiet mauris nec sapien accumsan dapibus. Fusce lacinia tristique eros nec pellentesque. Aenean dui massa, rhoncus quis aliquet ut, ultricies non felis. Pellentesque nec gravida libero. Praesent vel consequat ex, vel molestie risus. Fusce non ex congue justo interdum tincidunt in quis tortor. Proin finibus turpis nisl, ut consequat felis elementum vel. Ut lobortis, nisl in suscipit porta, arcu neque gravida sem, ac sagittis nulla lacus et est. Nulla facilisi. Sed et justo est. Maecenas eget tincidunt velit. Aenean porttitor accumsan augue, vitae sodales velit tincidunt quis. Praesent ultricies risus et interdum luctus. Donec auctor vitae ligula ac lobortis. Nulla aliquam sem augue, non facilisis ligula aliquam in. Nullam mollis arcu a felis fringilla, et laoreet tortor lacinia. Vestibulum sed elementum diam. Duis blandit nisl ut quam porta, vel varius est hendrerit. Proin ante est, lobortis a rutrum et, suscipit vitae risus. Sed nisl neque, accumsan vitae odio in, condimentum elementum ante. Proin nec risus eget felis rhoncus mollis in at elit. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec porttitor, ipsum id consectetur tincidunt, neque velit consequat enim, sed volutpat nisi nulla id turpis.'
  },
  {
    title: 'Post title',
    date: 'Nov 11',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.'
  },
  {
    title: 'Post title',
    date: 'Nov 13',
    description:
      'This is a wider card with supporting text below as a natural lead-in to additional content.'
  }
]

export default function Blog() {

  const [notes, setNotes] = useState([]);


  useEffect(() => {
    fetch('http://localhost:8000/notes')
      .then(res => res.json())
      .then(data => setNotes(data)).catch( function () {
        setNotes(featuredPosts);
      })
  }, []) 

  console.log(notes);
  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/notes/' + id, {
      method: 'DELETE'
    })
    const newNotes = notes.filter(note => note.id != id)
    setNotes(newNotes)
  }

  return (
    <div className="container">
      <Head>
        <title>Kup BSV</title>
        <link rel="icon" href="/bsvlogo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Header />
      <Container>
        <main className="main">
          <h1>BLOG</h1>
          <Grid container spacing={4}>
            {notes.map(post => (
              <Grid item key={post.title} xs={12} md={6}>
                <Card elevation={1}>
                  <CardHeader 
                    title={post.title}
                    subheader={post.date}
                    action={
                      <IconButton onClick={() => handleDelete(post.id)}>
                        <DeleteOutlined />
                      </IconButton>
                    }
                  />
                  <CardContent>
                    <Typography variant="subtitle1" paragraph>
                      {post.description}
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </main>
      </Container>
      <Socials />
      <Footer />
      <style jsx> {`
    .main {
      margin: 140px 0 50px 0;
      font-size: 16px;
      text-align: justify;
    }
      `} </style>
    </div>
  )
}
