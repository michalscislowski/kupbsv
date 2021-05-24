import Head from 'next/head'
import Header from '../components/header'
import Footer from '../components/footer'
import { useRouter} from 'next/router'



export default function Home() {
  const router = useRouter();

  if (router.isReady) {
    setTimeout(() => {
      router.push('/')
    }, 2000);
  }
  return (
    <div className="container">
      <Head>
        <title>Kup BSV</title>
        <link rel="icon" href="/bsvlogo.svg" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
      </Head>
      <div className="theme-changer-hider"></div>
      <div className="wrapper">
        <div><Header opacityVal={0}/></div>

        <div className="loading-page">
          <img src="/B_group.png" alt="Banach Group LOGO"></img>
        </div>
        <div><Footer opacityVal={0}/></div>
      </div>
      <style jsx> {`
        @keyframes zoomInLogo {
          0% {
            transform: scale(0.2);
          }
          100% {
            transform: scale(1);
          }
        }
        .theme-changer-hider {
          display: block;
          height: 50px;
          width: 100px;
          position: absolute;
          top: 100px;
          right: 20px;
          background: #0a0e12;
          z-index: 10;
        }
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
        .loading-page {
          margin-top: 80px;
          margin-left: auto;
          margin-right: auto;
        }
        img{
          animation: 2s ease-out 0s 1 zoomInLogo;
          width: 400px;
          height: 400px;
        }
      `} </style>
    </div>
  )
}
