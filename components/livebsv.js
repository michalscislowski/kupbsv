import React from 'react';
import Image from 'next/image';


export default function Livebsv(props) {
    return (
        <div className="customWidget">
            <div className="staticData">
                <a><Image src="/bsvlogo.svg" alt="BSV logo" width="64" height="64" /></a>
                <a>Bitcoin SV</a>
                <a>BSV/PLN</a>
            </div>
            <div className="changingData">
                <a>1 BSV ~ <strong>{props.price} PLN</strong></a>
                <a>Zmiana 24h: <strong className={props.percent24 > 0 ? "green" : "red" }>{props.percent24}% </strong></a>
                <a>Market Cap Rank: <strong>#{props.rank} </strong></a>
                <a>Min. 24h: <strong>{props.low} PLN </strong></a>
                <a>Maks. 24h: <strong>{props.high} PLN </strong></a>
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