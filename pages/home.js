import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import Main from '../components/main'
import { useRouter} from 'next/router'
import { useEffect } from 'react'



export default function Home() {
  const router = useRouter();
  // useEffect(() => {
  //   window.location.assign('/');
  // })
  return (
    <div className="container">
      <Head>
        <title>Kup BSV</title>
        <link rel="icon" href="/bsvlogo.svg" />
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
