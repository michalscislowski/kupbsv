import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';
import {useRecoilState} from 'recoil'
import {recoilUserAmount, recoilUserId} from './states'
import Button from '@material-ui/core/Button'


export default function Calculatorsell(props) {
    const [value, setValue] = useState(0);
    const userAmount = useRecoilState(recoilUserAmount);
    const userId = useRecoilState(recoilUserId)
    const tmp_userAmount = useState(parseFloat((userAmount[0].satoshis)/100000000));

    console.log("USERID", userId[0]);
    return (
        <div>
            <div className="typebox">
                <div className="textfield">
                    <TextField error={false} id="outlined-number" label="BSV" helperText={userId[0] === "" ? "min. 0.01 BSV" : null}
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
                {userId[0] === "" ? null :  
                    <div style={{position: 'absolute', top: 62.5, left: 15}}>
                        <Button style={{fontSize: '12px', padding: 7.5, height: 17.5, textTransform: 'none', color: '#808080'}}
                            onClick={()=> {setValue(tmp_userAmount[0])}}>
                            {"max " +  tmp_userAmount[0].toFixed(5) + ' BSV'}
                        </Button>
                    </div>
                }

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