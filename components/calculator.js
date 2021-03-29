import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from '../styles/Home.module.css';
import Button from '@material-ui/core/Button';
import Livebsv from '../components/livebsv.js';


export default function Calculator() {
  
    return (
        <form className={styles.calculator} noValidate autoComplete="off">
            <div>
                <Livebsv />
            </div>
            <div className={styles.typebox}>
                <div className={styles.textfield}>
                    <TextField error={false} id="outlined-basic" label="PLN" helperText="Minimalna wartość 100zł" variant="outlined"/>
                </div>
                
                <div className={styles.textfield}>
                    <TextField disabled id="outlined-disabled" label="BSV" variant="outlined"/>
                </div>
            </div>
            <div className={styles.changebutton}>
                    <Button variant="outlined" color="black">
                            BLIK
                    </Button>
            </div>
            <div className={styles.changebutton}>
                    <Button variant="outlined" color="black">
                            tPAY
                    </Button>
            </div>
        </form>
    );
  }