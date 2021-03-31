import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Livebsv from './livebsv.js';


export default function Calculatorbuy() {
    const [value, setValue] = useState(0);
  
    return (
        <form className="calculator" noValidate autoComplete="off">
            <div>
                <Livebsv />
            </div>
            <div className="typebox">
                <div className="textfield">
                    <TextField error={false} id="outlined-number" label="PLN" helperText="Min. wartość 100zł"  
                    type="number"
                    value={value}
                    InputProps={{ inputProps: { min: "100", max: "5000", step: "0.01" } }}
                    variant="outlined"
                    onChange={(e) => setValue(e.currentTarget.value)}
                    onBlur={(e) => {
                      if (e.currentTarget.value > 0 & e.currentTarget.value < 100 ) setValue(100);
                    }}
                    />
                </div>
                
                <div className="textfield">
                    <TextField disabled id="outlined-disabled" value={(value/850).toFixed(8)} label="BSV" variant="outlined" 
                />
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

            `}</style> 
        </form>
    );
  }