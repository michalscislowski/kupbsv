import styles from '../styles/Home.module.css';

export default function Livebsv () {
    return (
        <div className={styles.livecoinwatch}>
            <script defer src="https://www.livecoinwatch.com/static/lcw-widget.js">

            </script> 
            <div class="livecoinwatch-widget-1" 
                lcw-coin="BSV" 
                lcw-base="PLN" 
                lcw-secondary="BTC" 
                lcw-period="d" 
                lcw-color-tx="#ffffff" 
                lcw-color-pr="#ffffff" 
                lcw-color-bg="#000000" 
                lcw-border-w="1" 
                >    
            </div>
        </div>
    )
}

