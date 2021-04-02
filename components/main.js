import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Calculatorbuy from './calculatorbuy.js'
import Calculatorsell from './calculatorsell.js'
import YouTubeIcon from '@material-ui/icons/YouTube';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
  

export default function Main() {
    const [ showMe, setShowMe ] = useState(true);
    function toggle (){
        if  (!showMe) {
            setShowMe(true);
        }
        else {
            setShowMe(true);
        }
    }
    function toggle2 (){
        if  (showMe) {
            setShowMe(false);
        }
        else {
            setShowMe(false);
        }
    }
    
    return (
        <main className="main">
            <div className="box">
                <div className="buttons">

                    <Button onClick={toggle} variant="outlined" color="primary" style={{width: 120, marginRight: 10}}>
                        KUP
                    </Button>
                    <Button onClick={toggle2} variant="outlined" color="secondary" style={{width: 120, marginRight: 10}}>
                        SPRZEDAJ
                    </Button>
                    <Button variant="outlined" color="default" style={{width: 120,}}>
                        HISTORIA
                    </Button>
                </div>
                <div style={{ display: showMe?"block":"none" }}>
                    <Calculatorbuy />
                </div>
                <div style={{ display: !showMe?"block":"none" }}>
                    <Calculatorsell />
                </div>
            </div>
            <div className="room-for-socials"></div>
            <div className="socials">
                <a className="facebook"><FacebookIcon aria-label="Facebook.com" onClick={() => window.open('https://www.facebook.com/8anach')} /></a>
                <a className="instagram"><InstagramIcon aria-label="Instagram.com" onClick={() => window.open('https://www.instagram.com/8anach')}/></a>
                <a className="twitter"><TwitterIcon aria-label="Twitter.com" onClick={() => window.open('https://twitter.com/8anach')}/></a>
                <a className="twetch"><a aria-label="Twetch.com" onClick={() => window.open('https://twetch.app/u/40566')}/></a>
                <a className="youtube"><YouTubeIcon aria-label="Youtube.com" onClick={() => window.open('https://www.youtube.com/channel/UCegE3WW7U2-Wb__mWK3oKJA')}/></a>
            </div>
            <style jsx> {`
                .main {
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    color: white;
                    margin-top: 78px;
                }
                .box {
                    margin: auto;
                    width: 460px;
                    height: 500px;
                    padding: 30px;
                    background-color: #efefef;
                    box-shadow: 30px 20px;
                    border-radius: 30px;
                    box-shadow: 5px 5px 40px 3px rgba(50, 50, 50, 0.75);
                }
                .socials {
                    display: none;
                  }
                .buttons {
                    margin: 5px auto 7px auto;
                    display: flex;
                    justify-content: center;
                }
                .buttons::after {
                    clear: both;
                }
                .room-for-socials {
                    height: 50px;
                    display: block;
                }
                
                @media only screen and (max-width: 650px) {
                    .box, {
                      height: auto;
                      padding: 15px 10px 5px 10px;
                    }

                    .buttons {
                        margin: 0 auto;
                        padding-bottom: 0;
                    }

                    .room-for-socials {
                        display: none;
                    }
                    .socials a {
                        margin: 0;
                    }
                    .socials {
                        margin: auto;
                        display: flex;
                        border-bottom: solid 2px gray;
                        color: gray;
                        align-items: center;
                        justify-content: center;
                        width: 200px;
                        padding: 0;
                    }
                    .socials a:first-child{
                        margin-left: 0;
                    }
                    .twetch {
                        position: relative;
                        top: 2px;
                        background: url('/twetchlogo_gray.png') no-repeat center center;
                        background-size: 20px 20px;
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
                    .twetch:hover {
                        background: url('/twetchlogoblue.png') no-repeat center center;
                        background-size: 20px 20px;
                    }
                    .youtube:hover {
                        color: #cd201f;
                    }
                }
                @media only screen and (max-width: 499px) {
                    .box, {
                      width: 98%;
                      height: auto;
                      padding: 15px 10px 5px 10px;
                }
            `}</style>
        </main>
        
    );
}