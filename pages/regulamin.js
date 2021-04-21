import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import RegulaminText from '../components/regulamintext'

export default function Regulamin() {
    return (
      <div className="container">
        <Head>
          <title>Kup BSV</title>
          <link rel="icon" href="/bsvlogo.svg" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
        </Head>

        <Header />

        <RegulaminText />
        <Footer />
        <style jsx> {`

        `} </style>
      </div>
    )
  }