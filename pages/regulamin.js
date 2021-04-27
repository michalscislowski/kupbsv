import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import RegulaminText from '../components/textmain/regulamintext'
import { useRouter} from 'next/router'

export default function Regulamin() {
  const router = useRouter();
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