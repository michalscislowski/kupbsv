import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from '../styles/Home.module.css';
import Button from '@material-ui/core/Button';


export default function Calculator() {
  
    return (
        <form className={styles.calculator} noValidate autoComplete="off">
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
                            KUP BSV
                    </Button>
            </div>
        </form>
    );
  }