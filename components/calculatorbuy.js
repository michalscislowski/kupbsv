import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core'

const useStyles = makeStyles({
    payButton: {
        marginBottom: 10,
        width: 380,
        color: 'default',
        ['@media (max-width:499px)']: {
            width: 'calc(90% + 10px)',
        }
    }
})


export default function Calculatorbuy(props) {
    const [value, setValue] = useState(0);
    const classes = useStyles();
    return (
        <div>
            <div className="typebox">
                <div className="textfield">
                    <TextField error={false} id="outlined-number" label="PLN" helperText="min. 100zł"  
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
                    <TextField disabled id="outlined-disabled" value={(value/props.cena).toFixed(8)} label="BSV" variant="outlined" />
                </div>
            </div>
            <div className="changebutton">
                <Button variant="outlined" className={classes.payButton}>
                        BLIK
                </Button>
                <Button variant="outlined" className={classes.payButton}>
                        tPAY
                </Button>
            </div>
            <style jsx> {`
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
                    flex-direction: column;
                    align-items: center;
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