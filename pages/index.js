import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <a className={styles.title}>
          BANACH GROUP
        </a>

        <div className={styles.grid}>
          <p>Shape a new world around you.</p>
        </div>
      </main>

      <footer className={styles.footer}>
        <a>
          All rights reserved{' '}
          <img src="/logo.png" alt="Banach Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  )
}
