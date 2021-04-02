
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';


export default function Footer() {
  return (

    <div className="main">
    <footer className="footer">
      <p className="allrights">All rights reserved 2021</p>
      <div className="socials">
        <a className="facebook"><FacebookIcon aria-label="Facebook.com" onClick={() => window.open('https://www.facebook.com/8anach')} /></a>
        <a className="instagram"><InstagramIcon aria-label="Instagram.com" onClick={() => window.open('https://www.instagram.com/8anach')}/></a>
        <a className="twitter"><TwitterIcon aria-label="Twitter.com" onClick={() => window.open('https://twitter.com/8anach')}/></a>
        <a className="twetch" aria-label="Twetch.com" onClick={() => window.open('https://twetch.app/u/40566')}></a>
        <a className="youtube"><YouTubeIcon aria-label="Youtube.com" onClick={() => window.open('https://www.youtube.com/channel/UCegE3WW7U2-Wb__mWK3oKJA')}/></a>
      </div>
      <div>
        <img src="/logo.png" alt="Banach Logo" className="logo" />
      </div>
    </footer>


    <style jsx>{`

  .main {
    posiotion: fixed;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: black;
    color: white;
    text-align: center;
  }
  .footer {
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 5px 15px;
  }
  p {
    letter-spacing: 2px;
  }

  .socials {
    display: flex;
    justify-content: center;
  }
  .socials_mobile{
    display:none;
  }
  .socials a {
    margin-left: 15px;
  }
  a:hover {
    cursor: pointer;
  }
  .facebook:hover {
    color: #3b5998;
  }
  .instagram:hover {
    color: #e4405f;
  }
  .twitter:hover {
    color: #55acee;
  }
  .twetch {
    margin-top: 2px;
    width: 20px;
    height: 20px;
    background: url('/twetchlogo.png');
    background-size: 20px 20px;
  }
  .twetch:hover {
    background: url('/twetchlogoblue.png');
    background-size: 20px 20px;
  }
  .youtube:hover {
    color: #cd201f;
  }
  .logo {
    height: 25px;
  }

  @media only screen and (max-width: 650px) {
    .socials a {
      margin: 0;
    }
    .socials {
      width: 200px;
      border-bottom: solid 2px gray;
      color: gray;
      display: flex;
      align-items: center;
      justify-content: space-netween;
      align-items: baseline;
	    align-content: center;
      position: absolute;
      bottom: 8vh; 
    }
    .socials a:first-child{
      margin-left: 0;
    }
    .socials a {
      margin-left: 15px;
    }
    .twetch {
      position: relative;
      top: -2px;
      background: url('/twetchlogo_gray.png');
      background-size: 20px 20px;
    }
    }

  @media only screen and (max-width: 499px) {
    .allrights, .logo {
      font-size: 10px;
      margin: 0;
    }
    .logo {
      height: 18px;
    }
    .socials {
      bottom: 12vw; 
    }

    @media only screen and (max-width: 399px) {
      .socials {
        bottom: 10vw; 
    }

    @media only screen and (max-width: 326px) {
      .socials {
        bottom: -25vw; 
    }
      
`}</style>

    </div>
  );
}

