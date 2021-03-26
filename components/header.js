import SimpleMenu from '../components/simplemenu'
import styles from '../styles/Home.module.css'

export default function Header () {

return (
    <header className={styles.header}>
    <a href="#default" className={styles.headlogo}>KUPBSV</a>
      <div className={styles.headerRight}>
          <a>Money Button</a>
          <a href="#login">Login</a>
      </div>
      <div className={styles.headerLeft}>
        <SimpleMenu />
      </div>
    
    </header> 
);
}