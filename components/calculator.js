import React from 'react';
import TextField from '@material-ui/core/TextField';
import styles from '../styles/Home.module.css';



export default function BasicTextFields() {
  
    return (
        <form className={styles.typebox} noValidate autoComplete="off">
            <div className={styles.textfield}>
                <TextField className={styles.textfield} id="bsv" label="BSV" />
            </div>
            
            <div className={styles.textfield}>
                <TextField className={styles.textfield} id="pln" label="PLN" />
            </div>
        </form>
    );
  }