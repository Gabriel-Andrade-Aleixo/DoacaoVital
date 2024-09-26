import { useState } from "react";
import { Link } from "react-router-dom";
import styles from '../styles/NavBar.module.css';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);  // Controla se o menu está aberto ou fechado

    return (
        <header className={styles.header}>
            <div 
                className={styles.menuIcon} 
                onClick={() => setMenuOpen(!menuOpen)}  // Alterna o estado entre aberto e fechado
            >
                &#9776;  {/* Ícone de menu hamburguer */}
            </div>
            <nav className={styles.navBar}>
                <ul className={`${styles.navList} ${menuOpen ? styles.active : ''}`}>
                    <li>
                        <Link to="/" className={styles.navItem}>Inicio</Link>
                    </li>
                    <li>
                        <Link to="/doacao" className={styles.navItem}>Doação</Link>
                    </li>
                    <li>
                        <Link to="/estoque" className={styles.navItem}>Estoque</Link>
                    </li>
                    <li>
                        <Link to="/sobre" className={styles.navItem}>Sobre</Link>
                    </li>
                    <li>
                        <Link to="/solicitacao" className={styles.navItem}>Solicitação</Link>
                    </li>
                    <li>
                        <Link to="/suporte" className={styles.navItem}>Suporte</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default NavBar;
