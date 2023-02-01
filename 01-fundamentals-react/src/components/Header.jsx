import styles from'./Header.module.css'
import igniteLogo from '../assets/ignite-logo.svg'

export function Header() {
    return (
        <div>
            <header className={styles.header}>
                <img src={igniteLogo} alt="Logo of Ignite" />
            </header>
            
        </div>
        
    )
}