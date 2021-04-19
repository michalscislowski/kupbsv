import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();


export default function Livebsv() {
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
        console.log(rank);
        console.log(low);
        console.log(high);
        console.log(percent24);
      }, [price]); // <-- run on price update
    //console.log(price);

    return (
        <div className="customWidget">
            <div className="staticData">
                <a><Image src="/bsvlogo.svg" alt="BSV logo" width="64" height="64" /></a>
                <a>Bitcoin SV</a>
                <a>BSV/PLN</a>
            </div>
            <div className="changingData">
                <a>Cena: <strong>{price} PLN</strong></a>
                <a>Zmiana: <strong className={percent24 > 0 ? "green" : "red" }>{percent24}% </strong></a>
                <a>MarketCap Rank: <strong>#{rank} </strong></a>
                <a>Min. 24h: <strong>{low} PLN </strong></a>
                <a>Maks. 24h: <strong>{high} PLN </strong></a>
            </div>
            <style jsx>{`
            .customWidget {
                background: linear-gradient(#212121, #485849);
                border-radius: 5px;
                margin: 20px 10px;
                padding: 10px 15px;
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                min-height: 180px;
                letter-spacing: 1px;
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
            .changingData strong{
                text-decoration: underline;
            }
            .staticData a:nth-child(2) {
                font-weight: bold;
                font-size: 22px;
            }
            .red {
                color: #d64f4f;
            }
            .green {
                color: #4caf50;
                //color: #56ffD3;
            }
            @media only screen and (max-width: 499px) {
                .customWidget {
                    font-size: 11px;
                    margin-top: 10px;
                    margin-bottom: 10px;
                    letter-spacing: 0;
                }
                .staticData a:nth-child(2) {
                    font-size: 15px;
                    line-height: 26px;
                }
                .staticData {
                    margin-right: 15px;
                }
            }
            @media only screen and (max-width: 350px) {
                .customWidget {
                    font-size: 9px;
                }
                .staticData a:nth-child(2) {
                    font-size: 14px;
                    line-height: 26px;
                }
            }
            `}</style>
        </div>
    )
}