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
        height: '500px',
        padding: '30px',
        color: 'white',
        borderRadius: '30px',
        ['@media (max-width:499px)']: {
            width: '100%',
            height: 'auto',
            padding: '15px 10px 10px 10px'
        }
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
        console.log(theme);
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
                    margin: 5px auto 7px auto;
                    display: flex;
                    justify-content: center;
                }
                .buttons::after {
                    clear: both;
                }
                
                @media only screen and (max-width: 650px) {
                    main {
                        margin-top: 120px;
                    }
                    .box, {
                      height: auto;
                      padding: 15px 10px 5px 10px;
                    }
                    .buttons {
                        margin-top: 5px;
                        padding: 0;
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