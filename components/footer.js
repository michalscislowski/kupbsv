import styles from '../styles/Home.module.css'

export default function Footer () {
return (
    <footer className={styles.footer}>
        <a>
          All rights reserved{' '} 2021
          <img src="/logo.png" alt="Banach Logo" className={styles.logo} />  
        </a>
    </footer>
);
}

