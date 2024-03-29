
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';


export default function Footer(props) {
  return (

    <div className="main">
    <footer>
      <p className="allrights">All rights reserved 2021</p>
      <div className="socials">
        <a className="facebook"><FacebookIcon aria-label="Facebook.com" onClick={() => window.open('https://www.facebook.com/BanachGroup')} /></a>
        <a className="instagram"><InstagramIcon aria-label="Instagram.com" onClick={() => window.open('https://www.instagram.com/BanachGroup/')}/></a>
        <a className="linkedin"><LinkedInIcon aria-label="Linkedin.com" onClick={() => window.open('https://www.linkedin.com/company/banach-group')}/></a>
        <a className="twitter"><TwitterIcon aria-label="Twitter.com" onClick={() => window.open('https://twitter.com/BanachGroup')}/></a>
        <a className="twetch" aria-label="Twetch.com" onClick={() => window.open('https://twetch.app/u/40566')}></a>
        <a className="youtube"><YouTubeIcon aria-label="Youtube.com" onClick={() => window.open('https://www.youtube.com/channel/UCegE3WW7U2-Wb__mWK3oKJA')}/></a>
      </div>
      <div>
        <img src="/logo.png" alt="Banach Logo" className="logo" />
      </div>
    </footer>


    <style jsx>{`

  .main {
    background-color: black;
    color: white;
    text-align: center;
    width: 100%;
    min-width: 300px;
    border-top: 1px solid gray;
    opacity: ${props.opacityVal};
  }
  footer {
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
    padding-right: 15px;
  }
  .socials a {
    margin-left: 15px;
    transition: 0.3s;
  }
  a:hover {
    cursor: pointer;
    transform: scale(1.15);
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
    background: url('/twetchlogo.png'), url('/twetchlogoblue.png');
    background-size: 20px 20px;
  }
  .twetch:hover {
    background: url('/twetchlogoblue.png');
    background-size: 20px 20px;
  }
  .youtube:hover {
    color: #cd201f;
  }
  .linkedin:hover {
    color: #0072b1;
  }
  .logo {
    height: 25px;
  }

  @media only screen and (max-width: 674px) {
    .socials {
      display: none;
    }
    footer {
      justify-content: space-around;
    }
    .logo {
      margin: 0 15px;
    }
  }

  @media only screen and (max-width: 499px) {
    .allrights, .logo {
      font-size: 10px;
      margin: 0;
    }
    .logo {
      height: 16px;
      padding: 2px 15px 0;
      margin: auto;
    }
      
`}</style>

    </div>
  );
}

