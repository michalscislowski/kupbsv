import React, { useState, useEffect } from 'react';
import TextField from '@material-ui/core/TextField';


export default function Calculatorsell(props) {
    const [value, setValue] = useState(0);

    return (
        <div>
            <div className="typebox">
                <div className="textfield">
                    <TextField error={false} id="outlined-number" label="BSV" helperText="min. 0.01 BSV"  
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
                    <TextField disabled id="outlined-disabled" value={(value*props.cena).toFixed(2)} label="PLN" variant="outlined" />
                </div>
            </div>

            <style jsx> {`
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
                        width: 45%;
                        margin: 10px 5px;
                    }
                }

            `}</style>
        </div>
    );
}