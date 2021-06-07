import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import {useRecoilState} from 'recoil'
import {recoilUserAmount} from './states'
import Button from '@material-ui/core/Button'


export default function Calculatorsell(props) {
    const [value, setValue] = useState(0);
    const userAmount = useRecoilState(recoilUserAmount);
    const tmp_userAmount = useState(parseFloat((userAmount[0].satoshis)/100000000));
    console.log("SELL ", tmp_userAmount[0]);
    console.log("SELL ", userAmount[0]);
    return (
        <div>
            <div className="typebox">
                <div className="textfield">
                    <TextField error={false} id="outlined-number" label="BSV"
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
                <Button style={{position: 'absolute', top: 65, left: 10, padding: 5, height: 25, width: 180, textAlign: 'center', textTransform: 'none', color: '#808080'}} onClick={()=> {setValue(tmp_userAmount[0])}}>{"max " +  tmp_userAmount[0].toFixed(5) + ' BSV'}</Button>

                <div className="textfield">
                    <TextField disabled id="outlined-disabled" value={(value*props.cena).toFixed(2)} label="PLN" variant="outlined" />
                </div>
            </div>

            <style jsx> {`
                .typebox {
                    width: auto;
                    height: auto;
                    display: flex;
                    justify-content: center;
                    position: relative;
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
                        width: 45%;
                        margin: 10px 5px;
                    }
                }

            `}</style>
        </div>
    );
}