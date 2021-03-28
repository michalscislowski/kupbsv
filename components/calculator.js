import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from '../styles/Home.module.css';



export default function Calculator() {
  
    return (
        <form className={styles.typebox} noValidate autoComplete="off">
            <div className={styles.textfield}>
                <TextField error={false} className={styles.textfield} id="outlined-basic" label="PLN" helperText="Minimalna wartość 100zł" variant="outlined"/>
            </div>
            
            <div className={styles.textfield}>
                <TextField disabled className={styles.textfield} id="outlined-disabled" label="BSV" variant="outlined"/>
            </div>
        </form>
    );
  }