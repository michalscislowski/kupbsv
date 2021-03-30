import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Livebsv from './livebsv.js';


export default function Calculatorbuy() {

  
    return (
        <form className="calculator" noValidate autoComplete="off">
            <div>
                <Livebsv />
            </div>
            <div className="typebox">
                <div className="textfield">
                    <TextField error={false} id="outlined-basic" label="PLN" helperText="Minimalna wartość 100zł" variant="outlined"/>
                </div>
                
                <div className="textfield">
                    <TextField disabled id="outlined-disabled" label="BSV" variant="outlined"/>
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