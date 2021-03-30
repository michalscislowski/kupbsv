import React from 'react';
import Button from '@material-ui/core/Button';
import Calculator from '../components/calculator.js'
  

export default function Main() {
    return (
        <main className="main">
            <div className="box">
                <div className="buttons">
                    <Button variant="outlined" color="black" style={{width: 120, marginRight: 10}}>
                        KUP
                    </Button>
                    <Button variant="outlined" color="black" style={{width: 120, marginRight: 10}}>
                        SPRZEDAJ
                    </Button>
                    <Button variant="outlined" color="black" style={{width: 120,}}>
                        HISTORIA
                    </Button>
                </div>
                <Calculator />
                    
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