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
                    <Button onClick={toggle} variant="outlined" color="black" style={{width: 120, marginRight: 10}}>
                        KUP
                    </Button>
                    <Button onClick={toggle2} variant="outlined" color="black" style={{width: 120, marginRight: 10}}>
                        SPRZEDAJ
                    </Button>
                    <Button variant="outlined" color="black" style={{width: 120,}}>
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
            <style jsx> {`
                .main {
                    display: flex;
                    flex: 1;
                    width: 100%;
                    color: white;
                    margin-top: 78px;
                }
                .box {
                    margin: auto;
                    width: auto;
                    height: 100%;
                    padding: 30px;
                    padding-bottom: 2.5%;
                    /* background-image: linear-gradient(to right top, #cdcdcd, #adadad, #989898, #adadad, #ededed);*/
                    background-color: #efefef;
                    box-shadow: 30px 20px;
                    border-radius: 30px;
                    box-shadow: 5px 5px 40px 3px rgba(50, 50, 50, 0.75);
                }
                .buttons {
                    margin: 5px auto 7px auto;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    filter: none;
                }
                .buttons::after {
                    clear: both;
                }
            `}</style>
        </main>
        
    );
}