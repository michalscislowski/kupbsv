import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Calculatorbuy from './calculatorbuy.js'
import Calculatorsell from './calculatorsell.js'
  

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

                @media only screen and (max-width: 499px) {
                    .box, {
                      width: 100%;	
                      height: auto;
                      padding: 15px 10px 5px 10px;
                    }

                    .buttons {
                        margin: 0 auto;
                        padding-bottom: 0;
                    }
                }

                @media only screen and (max-width: 399px) {
                    .box, {
                        
                    }

                }
            `}</style>
        </main>
        
    );
}