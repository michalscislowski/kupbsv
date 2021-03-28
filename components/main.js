import React from 'react';
import Button from '@material-ui/core/Button';
import styles from '../styles/Home.module.css'
import Calculator from '../components/calculator.js'

  

export default function Main() {
    return (
        <main className={styles.main}>
            <div className={styles.box}>
                <div className={styles.buttons}>
                    <Button  variant="outlined" color="black">
                        KUP
                    </Button>
                    <Button variant="outlined" color="black">
                        SPRZEDAJ
                    </Button>
                    <Button variant="outlined" color="black">
                        HISTORIA
                    </Button>
                </div>
                    <Calculator />
                    
            </div>
            
        </main>
        
    );
}