import React, { useState } from 'react'
import Button from '@material-ui/core/Button'
import WholesomeCalculator from './wholesomeCalculator.js'
import Card from '@material-ui/core/Card'
import { makeStyles } from '@material-ui/core'
import useTheme from '../components/useTheme'
import Socials from '../components/socials'
  
const useStyles = makeStyles({
    box: {
        margin: 'auto',
        width: '460px',
        minHeight: '506px',
        height: 'auto',
        padding: '30px',
        color: 'white',
        borderRadius: '30px',
        position: 'relative',
        ['@media (max-width:499px)']: {
            marginLeft: 10,
            marginRight: 10,
            width: 'calc(100% - 20px)',
            height: 'auto',
            padding: '15px 10px 20px 10px'
        },
        overflow: 'visible',
    },
    buttonBuy: {
        width: '50%', 
        marginRight: 10, 
        marginLeft: 10, 
        color: 'white',
        background: '#1d6c21', 
        '&:hover': {
            background: "#3f8e43",
         },
    },
    buttonSell: {
        width: '50%', 
        marginRight: 10, 
        color: 'white',
        background: '#a60b0b',
        '&:hover': {
            background: "#c82d2d",
         },
    }
})


export default function Main() {
    const [ showMe, setShowMe ] = useState(true);
    const classes = useStyles();
    const theme = useTheme();

    function setBuy (){
        setShowMe(true);
    }
    function setSell (){
        setShowMe(false);
    }
  
    return (
        <main>
            <Card elevation={12} className={classes.box} md={6}>
                <div className="buttons">
                    <Button onClick={setBuy} variant="contained" className={classes.buttonBuy}>
                        KUP
                    </Button>
                    <Button onClick={setSell} variant="contained" className={classes.buttonSell}>
                        SPRZEDAJ
                    </Button>
                </div>
                <WholesomeCalculator calc={showMe?"buy":"sell"}/>
                <div className="powered">Powered by
                    <a onClick={() => window.open('https://www.coingecko.com/')} >CoinGecko</a>
                    <a onClick={() => window.open('https://blockpass.org/')} >Blockpass</a>
                    <a onClick={() => window.open('https://www.moneybutton.com/')} >Moneybutton</a>
                    <a onClick={() => window.open('https://vercel.com/')} >Vercel</a>
                </div>
            </Card>
            <Socials />
            <style jsx> {`
                main {
                    display: flex;
                    flex: 1;
                    flex-direction: column;
                    justify-content: center;
                    color: white;
                    margin-top: 80px;
                }
                .buttons {
                    margin: 5px auto 0 auto;
                    display: flex;
                    justify-content: center;
                }
                .buttons::after {
                    clear: both;
                }
                .powered {
                    float: right;
                    color: #606060;
                    font-size: 10px;
                    text-align: center;
                    margin-right: 8px;
                    position: absolute;
                    bottom: 0;
                    right: 30px;
                }
                a {
                    color: gray;
                    font-weight: 500;
                    display: inline-block;
                    padding: 5px 2.5px;
                    cursor: pointer;
                    transition: 0.2s;
                }
                a:hover {
                    color: #a2a2a2;
                }
                @media only screen and (max-width: 650px) {
                    main {
                        margin-top: 125px;
                    }
                    .buttons {
                        margin-top: 5px;
                        padding: 0;
                    }
                    .powered {
                        margin-right: -10px;
                    }
                }
                @media only screen and (max-width: 499px) {
                    .buttons {
                        margin-top: 10px;
                        margin-bottom: 15px;
                    }
                }
            `}</style>
        </main>
        
    );
}