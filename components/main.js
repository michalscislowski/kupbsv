import React from 'react';
import Button from '@material-ui/core/Button';
import styles from '../styles/Home.module.css'
import Calculator from '../components/calculator.js'

  

export default function Main() {
    return (
        <main className={styles.main}>
            <div className={styles.box}>
                <div className={styles.buttons}>
                    <Button  variant="outlined" color="primary">
                        KUP
                    </Button>
                    <Button variant="outlined" color="primary">
                        SPRZEDAJ
                    </Button>
                    <Button variant="outlined" color="primary">
                        HISTORIA
                    </Button>
                </div>
                <div className={styles.calculator}>
                    <Calculator />
                </div>
            </div>
            
        </main>
        
    );
}