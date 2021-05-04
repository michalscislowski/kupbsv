import React, { useState, useEffect } from 'react';
import Livebsv from './livebsv';
import Calculatorbuy from './calculatorbuy.js'
import Calculatorsell from './calculatorsell.js'


const CoinGecko = require('coingecko-api');
const CoinGeckoClient = new CoinGecko();

export default function WholesomeCalculator(props) {
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

  /*   useEffect(() => {
        console.log(price); // <-- log updated state
        console.log(rank);
        console.log(low);
        console.log(high);
        console.log(percent24);
      }, [price]); // <-- run on price update */

    return (
        <form className="calculator" noValidate autoComplete="off">
            <Livebsv price={price} rank={rank} low={low} high={high} percent24={percent24}/>
            {props.calc === 'buy' ? <Calculatorbuy cena={price}/> : <Calculatorsell cena={price}/>}
        </form>
    );
  }