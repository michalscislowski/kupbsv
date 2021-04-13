import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Image from 'next/image';

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

export default function Calculatorsell() {
    const [value, setValue] = useState(0);

    const [price, setPrice] = useState();
    const [rank, setRank] = useState();
    const [low, setLow] = useState();
    const [high, setHigh] = useState();
    const [percent24, setPercent24] = useState();

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
            setRank(parseFloat(result.data['0'].market_cap_rank));
            setLow(parseFloat(result.data['0'].low_24h));
            setHigh(parseFloat(result.data['0'].high_24h));
            setPercent24(parseFloat(result.data['0'].price_change_percentage_24h).toFixed(2));
        };
        fetchData();
        const timerId = setInterval(fetchData, 5000);
        return () => clearInterval(timerId);
    },[]);

    useEffect(() => {
        console.log(price); // <-- log updated state
    }, [price]); // <-- run on price update

    return (
        <form className="calculator" noValidate autoComplete="off">
           {/* // <Livebsv /> */}
           <div className="customWidget">
                <div className="staticData">
                    <a><Image src="/bsvlogo.svg" alt="BSV logo" width="64" height="64"/></a>
                    <a>Bitcoin SV</a>
                    <a>BSV/PLN</a>            
                </div>
                <div className="changingData">
                    <a>Cena: <strong>{price} PLN</strong></a>
                    <a>Zmiana: <strong>{percent24}% </strong></a>
                    <a>MarketCap Rank: <strong>#{rank} </strong></a>
                    <a>Min. 24h: <strong>{low} PLN </strong></a>
                    <a>Maks. 24h: <strong>{high} PLN </strong></a>
                </div>
           </div>
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
                .customWidget {
                    background: linear-gradient(#212121, #485849);
                    border-radius: 5px;
                    margin: 20px 10px;
                    padding: 10px 15px;
                    display: flex;
                    flex-direction: row;
                    justify-content: space-between;
                    min-height: 180px;
                }
                .changingData, .staticData {
                    display: flex;
                    flex-direction: column;
                    justify-content: center;
                    margin: auto;
                }
                .staticData {
                    align-items: center;
                }
                .changingData a {
                    line-height: 25px;
                }
                .staticData a:nth-child(2) {
                    font-weight: bold;
                    font-size: 22px;
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