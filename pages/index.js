import Head from 'next/head'
import Header from '../components/header'
import styles from '../styles/Home.module.css'
import Footer from '../components/footer'
import Main from '../components/main'



export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Kup BSV</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Main />

      <Footer />
    </div>
  )
}
