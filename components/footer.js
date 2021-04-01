
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import BlurOnIcon from '@material-ui/icons/BlurOn';

export default function Footer() {
  return (
    <div className="main">
    <footer className="footer">
      <p className="allrights">All rights reserved 2021</p>
      <div>
        <img src="/logo.png" alt="Banach Logo" className="logo" />
      </div>
      <div className="socials">
        <a className="facebook"><FacebookIcon aria-label="Facebook.com" onClick={() => window.open('https://www.facebook.com/8anach')} /></a>
        <a className="instagram"><InstagramIcon aria-label="Instagram.com" onClick={() => window.open('https://www.instagram.com/8anach')}/></a>
        <a className="twitter"><TwitterIcon aria-label="Twitter.com" onClick={() => window.open('https://twitter.com/8anach')}/></a>
        <a className="twetch"><BlurOnIcon aria-label="Twetch.com" onClick={() => window.open('https://twetch.app/u/40566')}/></a>
        <a className="youtube"><YouTubeIcon aria-label="Youtube.com" onClick={() => window.open('https://www.youtube.com/channel/UCegE3WW7U2-Wb__mWK3oKJA')}/></a>
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
    padding: 5px 15px;
  }
  p {
    letter-spacing: 2px;
  }

  .socials {
    margin-left: auto;
  }
  .socials a {
    margin-right: 10px;
  }
  .logo {
    height: 25px;
    margin-left: 2em;
  }

  @media only screen and (max-width: 550px) {
  .rightstext {
      font-size: 16px;
      margin-top: 23px;
    }
  .logo {
    padding-left: 20px;
    margin-top: 23px;
    height: 21px;
  }
  }

`}</style>

    </div>
  );
}

