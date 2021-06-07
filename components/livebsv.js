import React, {useState, useRef, useEffect} from 'react'
import Image from 'next/image'
import { makeStyles } from '@material-ui/core'
import Card from '@material-ui/core/Card'
import Grow from '@material-ui/core/Grow'
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts'
import BarChartIcon from '@material-ui/icons/BarChart'
import CloseIcon from '@material-ui/icons/Close'

const data = [
    {
      "price": 169.5,
      "hour": "00:00",
	  "id": 24
    },
    {
      "price": 167.7,
      "hour": "1:00",
	  "id": 1
    },
    {
      "price": 167.9,
      "hour": "2:00",
	  "id": 2
    },
    {
      "price": 167.4,
      "hour": "3:00",
	  "id": 3
    },
    {
      "price": 166.5,
      "hour": "4:00",
	  "id": 4
    },
    {
      "price": 166.2,
      "hour": "5:00",
	  "id": 5
    },
    {
      "price": 164,
      "hour": "6:00",
	  "id": 6
    },
    {
      "price": 162,
      "hour": "7:00",
	  "id": 7
    },
    {
      "price": 162.2,
      "hour": "8:00",
	  "id": 8
    },
	{
      "price": 161.8,
      "hour": "9:00",
	  "id": 9
    },
    {
      "price": 162.1,
      "hour": "10:00",
	  "id": 10
    },
    {
      "price": 163,
      "hour": "11:00",
	  "id": 11
    },
    {
      "price": 165.1,
      "hour": "12:00",
	  "id": 12
    },
    {
      "price": 167,
      "hour": "13:00",
	  "id": 13
    },
    {
      "price": 167.7,
      "hour": "14:00",
	  "id": 14
    },
    {
      "price": 166.9,
      "hour": "15:00",
	  "id": 15
    },
    {
      "price": 169.9,
      "hour": "16:00",
	  "id": 16
    },
	{
      "price": 169.3,
      "hour": "17:00",
	  "id": 17
    },
    {
      "price": 169,
      "hour": "18:00",
	  "id": 18
    },
    {
      "price": 168.8,
      "hour": "19:00",
	  "id": 19
    },
    {
      "price": 169.1,
      "hour": "20:00",
	  "id": 20
    },
    {
      "price": 172.5,
      "hour": "21:00",
	  "id": 21
    },
    {
      "price": 171.5,
      "hour": "22:00",
	  "id": 22
    },
    {
      "price": 171.3,
      "hour": "23:00",
	  "id": 23
    }
]

/* let useClickOutside = (handler) => {
    let domNode = useRef();
    useEffect(() => {
        let maybeHandler = (event) => {
        if (!domNode.current.contains(event.target)) {
            handler();
        }
        };

        document.addEventListener("mousedown", maybeHandler);

        return () => {
        document.removeEventListener("mousedown", maybeHandler);
        };
    });

    return domNode;
}; */

const useStyles = makeStyles({
    chart: {
        border: '1px solid #666',
        width: 'calc(100% - 20px)',
        height: '150px',
        borderRadius: '5px',
        marginBottom: 15,
        marginLeft: 10,
        ['@media (min-width:999px)']: {
            position: 'absolute',
            top: 25,
            left: 380,
            width: 300,
            height: 150,
            marginTop: 10,
        },
    },
    chartButton: {
        border: '1px solid #666',
        borderRadius: '3px',
        position: 'absolute',
        top: 25, 
        right: 17.5, 
        cursor: 'pointer',
        transition: '0.3s',
        color: '#eee',
        '&:hover': {
            color: '#707070'
        }
    }
})

export default function Livebsv(props) {
    const classes = useStyles();
    const [hover, setHover] = useState(false);
    const [lastDayPrice, setLastDayPrice] = useState([]);
    const url = process.env.NEXT_PUBLIC_HOST_URL + "/api/priceChart";

    useEffect(()=> {
        fetch(url).then(res => {
          if(res.ok){
            return res.json()
          }
          console.log("JSON" + res.json());
        }).then(jsonRes => setLastDayPrice(jsonRes))
        .catch( function () { setLastDayPrice(data) })
    }, []);
    
    /* let domNode = useClickOutside(() => {
        setHover(false);
    }); */
    return (
        <div className="widget-container">
            <div className="customWidget">
                <div className="staticData">
                    <a><Image src="/bsvlogo.svg" alt="BSV logo" width="64" height="64" /></a>
                    <a>Bitcoin SV</a>
                    <a>BSV/PLN</a>
                </div>
                <div className="changingData" /* ref={domNode} */ >
                    {!hover ? <BarChartIcon onClick={e => {setHover(!hover)}} className={classes.chartButton}/>
                    : <CloseIcon onClick={e => {setHover(!hover)}} className={classes.chartButton}/>}
                    <a>1 BSV ~ <strong>{props.price} PLN</strong></a>
                    <a>Zmiana 24h: <strong className={props.percent24 > 0 ? "green" : "red" }>{props.percent24}% </strong></a>
                    <a>Market Cap Rank: <strong>#{props.rank} </strong></a>
                    <a>Min. 24h: <strong>{props.low} PLN </strong></a>
                    <a>Maks. 24h: <strong>{props.high} PLN </strong></a>
                </div>
            </div>
            {hover ? <div className={classes.chart}> 
                <Grow in={hover}>
                    <Card elevation={4}>
                        <ResponsiveContainer width="100%" height={150}>
                            <LineChart label="cena" data={lastDayPrice} margin={{ top: 10, right: 15, bottom: -5, left: -20 }}>
                                <Line type="monotone" dataKey="price" stroke="#8884d8" />
                                <CartesianGrid stroke="#ccc" strokeDasharray="3 3"/>
                                <XAxis dataKey={"hour"} interval={3} dx={10}/>
                                <YAxis type="number" domain={['auto', 'auto']}/>
                                <Tooltip />
                            </LineChart>
                        </ResponsiveContainer>
                    </Card>
                </Grow> 
            </div> : null}
            <style jsx>{`
            .widget-container {
                display: flex;
                flex-direction: column;
                align-items: stretch;
                position: relative;
            }
            .customWidget {
                background: linear-gradient(#191b1c, #3c4144);
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