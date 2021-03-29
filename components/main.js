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
                    margin-top: 76px;
                    margin-bottom: 70px;
                }
                .box {
                    width: auto;
                    margin-left: auto;
                    margin-right: auto;
                }
                .buttons {
                    margin-left: auto;
                    margin-right: auto;
                    margin-top: 5px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .buttons::after {
                    clear: both;
                }
            `}</style>
        </main>
        
    );
}