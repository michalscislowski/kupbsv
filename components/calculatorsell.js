import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Livebsv from './livebsv.js';

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

export default function Calculatorsell() {
    const [value, setValue] = useState(0);

    const [price, setPrice] = useState();
    useEffect(() => {
        const fetchPrice = async () => {
            const result = await CoinGeckoClient.simple.price({
                ids: "bitcoin-cash-sv",
                vs_currencies: "pln",
            });
            setPrice(parseFloat(result.data.['bitcoin-cash-sv'].pln));
        
        }; 
        fetchPrice(); 
        const timerId = setInterval(fetchPrice, 5000); // <-- start interval
        return () => clearInterval(timerId); // <-- return cleanup
    },[]);

    useEffect(() => {
        console.log(price); // <-- log updated state
    }, [price]); // <-- run on price update

    return (
        <form className="calculator" noValidate autoComplete="off">
            <Livebsv />
            <div className="typebox">
                <div className="textfield">
                    <TextField error={false} id="outlined-number" label="BSV" helperText="Min. wartość 0,01 BSV"  
                    type="tel"
                    value={value}
                    InputProps={{ inputProps: { min: "0.01", max: "5000", step: "0.01" } }}
                    variant="outlined"
                    onKeyPress={(e) => {
                        if (!/[0-9.]/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                    onChange={(e) => setValue(e.currentTarget.value)}
                    onBlur={(e) => {
                      if (e.currentTarget.value < 0.01 ) setValue(0.01);
                    }}
                    />
                </div>

                <div className="textfield">
                    <TextField disabled id="outlined-disabled" value={(value*price).toFixed(2)} label="PLN" variant="outlined" 
                />
                </div>
            </div>
            <div className="changebutton">
                <Button variant="outlined" color="default" style={{ width: 380 }}>
                    BLIK
                    </Button>
            </div>
            <div className="changebutton">
                <Button variant="outlined" color="default" style={{ width: 380 }}>
                    tPAY
                    </Button>
            </div>
            <style jsx> {`
                .calculator {
                    border: black solid 0px;
                    border-radius: 10px;
                    width: auto;
                    height: auto;
                }
                .typebox {
                    width: auto;
                    height: auto;
                    display: flex;
                    justify-content: center;
                }
                .textfield {
                    margin-top: 5px;
                    margin-bottom: 10px;
                    margin-left: 10px;
                    margin-right: 10px;
                    width: 180px;
                }
                .changebutton {
                    display: flex;
                    justify-content: center;
                    margin-bottom: 10px;
                    width: 100%;
                }

                @media only screen and (max-width: 499px) {
                    .textfield {
                        width: 50%;
                        margin: 10px 5px;
                }

            `}</style>
        </form>
    );
}