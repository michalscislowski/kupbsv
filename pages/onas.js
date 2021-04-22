import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import ONasText from '../components/onastext'

export default function Regulamin() {
    return (
      <div className="container">
        <Head>
          <title>Kup BSV</title>
          <link rel="icon" href="/bsvlogo.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>

        <Header />
        <ONasText />
        <Footer />
        <style jsx> {`

        `} </style>
      </div>
    )
  }