import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Main from '../components/main'



export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Kup BSV</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <Header />

      <Main />

      <Footer />
      <style jsx> {`
        .container {
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      `} </style>
    </div>
  )
}
