import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Livebsv from './livebsv';


const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

export default function Calculatorbuy() {
    const [value, setValue] = useState(0);
    const [price, setPrice] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const result = await CoinGeckoClient.coins.markets({
                vs_currency: "pln",
                ids: "bitcoin-cash-sv",
                order: "market_cap_desc",
                per_page: "100",
                page: "1",
                price_change_percentage: "24h",
            });
            setPrice(parseFloat(result.data['0'].current_price));
        };
        fetchData();
        const timerId = setInterval(fetchData, 5000);
        return () => clearInterval(timerId);
    },[]);

    return (
        <form className="calculator" noValidate autoComplete="off">
            <Livebsv test="gowno"/>
            <div className="typebox">
                <div className="textfield">
                    <TextField error={false} id="outlined-number" label="PLN" helperText="Min. wartość 100zł"  
                    type="tel"
                    value={value}
                    InputProps={{ 
                        inputProps: { min: "100", max: "5000", step: "0.01" } 
                    }}
                    variant="outlined"
                    onKeyPress={(e) => {
                        if (!/[0-9.]/.test(e.key)) {
                          e.preventDefault();
                        }
                      }}
                    onChange={(e) => setValue(e.currentTarget.value)}
                    onBlur={(e) => {
                      if (e.currentTarget.value > 0 & e.currentTarget.value < 100 ) 
                        setValue(100);
                      else if (e.currentTarget.value > 5000) 
                        setValue(5000);
                    }}
                    />
                </div>
                
                <div className="textfield">
                    <TextField disabled id="outlined-disabled" value={(value/price).toFixed(8)} label="BSV" variant="outlined" />
                </div>
            </div>
            <div className="changebutton">
                    <Button variant="outlined" color="default" style={{width: 380}}>
                            BLIK
                    </Button>
            </div>
            <div className="changebutton">
                    <Button variant="outlined" color="default" style={{width: 380}}>
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
                    margin: 5px 10px 10px;
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
                }
            `}</style> 
        </form>
    );
  }