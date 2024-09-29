import { useState } from "react";
import { Link } from "react-router-dom";
import styles from '../styles/NavBar.module.css';

function NavBar() {
    // Usando useState para controlar se o menu está aberto ou fechado
    const [menuOpen, setMenuOpen] = useState(false);

    // Função para alternar o estado do menu
    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className={styles.hamburguer}>
            {/* Botão para abrir o menu */}
            <div className={styles.btnabrir}>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16" onClick={toggleMenu}>
                    <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                </svg>
            </div>
            <hr />

            {/* Header com menu, aplicando classes dinamicamente */}
            <header className={`${styles.header} ${menuOpen ? styles.abrMenu : ''}`}>
                <div className={styles.btnfechar} onClick={toggleMenu}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                        <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                    </svg>
                </div>

                <nav className={styles.navBar}>
                    <ul className={styles.navList}>
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

            {/* Background escuro que aparece quando o menu está aberto */}
            {menuOpen && <div className={styles.escMenu} onClick={toggleMenu}></div>}
        </div>
    );
}

export default NavBar;
