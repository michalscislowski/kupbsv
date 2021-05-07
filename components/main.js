import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import YouTubeIcon from '@material-ui/icons/YouTube'
import FacebookIcon from '@material-ui/icons/Facebook'
import InstagramIcon from '@material-ui/icons/Instagram'
import TwitterIcon from '@material-ui/icons/Twitter'
import WholesomeCalculator from './wholesomeCalculator.js'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core'
import useTheme from '../components/useTheme'
  
const useStyles = makeStyles({
    box: {
        margin: 'auto',
        width: '460px',
        height: '500px',
        padding: '30px',
        color: 'white',
        borderRadius: '30px',
        ['@media (max-width:499px)']: {
            width: '100%',
            height: 'auto',
            padding: '15px 10px 5px 10px'
        }
    },
    buttonBuy: {
        width: '50%', 
        marginRight: 10, 
        marginLeft: 10, 
        backgroundColor: '#2e7d32', 
    },
    buttonSell: {
        width: '50%', 
        marginRight: 10, 
        backgroundColor: '#b71c1c'
    }
})


export default function Main() {
    const [ showMe, setShowMe ] = useState(true);
    const classes = useStyles();
    const theme = useTheme();

    function setBuy (){
        setShowMe(true);
        console.log(theme);
    }
    function setSell (){
        setShowMe(false);
    }
  
    return (
        <main>
            {/* <div className="box"> */}
            <Card elevation={12} className={classes.box} md={6}>
                <div className="buttons">

                    <Button onClick={setBuy} variant="contained" color="secondary" className={classes.buttonBuy}>
                        KUP
                    </Button>
                    <Button onClick={setSell} variant="contained" color="secondary" className={classes.buttonSell}>
                        SPRZEDAJ
                    </Button>

                </div>
                <WholesomeCalculator calc={showMe?"buy":"sell"}/>
            </Card>
            {/* </div> */}
            {/* <div id="room-for-socials" className="room-for-socials"><a className="push"></a></div> */}
            <div className="socials">
                <a className="facebook"><FacebookIcon aria-label="Facebook.com" onClick={() => window.open('https://www.facebook.com/8anach')} /></a>
                <a className="instagram"><InstagramIcon aria-label="Instagram.com" onClick={() => window.open('https://www.instagram.com/8anach')}/></a>
                <a className="twitter"><TwitterIcon aria-label="Twitter.com" onClick={() => window.open('https://twitter.com/8anach')}/></a>
                <a className="twetch" aria-label="Twetch.com" onClick={() => window.open('https://twetch.app/u/40566')}></a>
                <a className="youtube"><YouTubeIcon aria-label="Youtube.com" onClick={() => window.open('https://www.youtube.com/channel/UCegE3WW7U2-Wb__mWK3oKJA')}/></a>
            </div>
            <style jsx> {`
                main {
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    justify-content: center;
                    color: white;
                    margin-top: 80px;
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
                    main {
                        margin-top: 120px;
                    }
                    a {
                        transition: 0.4s;
                    }
                    .box, {
                      height: auto;
                      padding: 15px 10px 5px 10px;
                    }

                    .buttons {
                        margin-top: 5px;
                        padding: 0;
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
                        padding: 22px;
                    }
                    a:hover {
                        cursor: pointer;
                        transform: scale(1.3);
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
                }
            `}</style>
        </main>
        
    );
}