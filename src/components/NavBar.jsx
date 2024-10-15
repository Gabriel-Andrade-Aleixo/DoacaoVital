import { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from '../styles/NavBar.module.css';

function NavBar() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <>
            <div className={styles.hamburguer}>
                <div className={styles.btnabrir}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16" onClick={toggleMenu}>
                        <path fillRule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5" />
                    </svg>
                </div>
                <hr />

                <header className={`${styles.header} ${menuOpen ? styles.abrMenu : ''}`}>
                    <div className={styles.btnfechar} onClick={toggleMenu}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="30" fill="currentColor" className="bi bi-x-lg" viewBox="0 0 16 16">
                            <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8z" />
                        </svg>
                    </div>

                    <nav className={styles.navBar}>
                        <ul className={styles.navList}>
                            <li>
                                <NavLink 
                                    to="/home" 
                                    className={({ isActive }) => isActive ? styles.activeLink : styles.navItem}
                                >
                                    Inicio
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/doacao" 
                                    className={({ isActive }) => isActive ? styles.activeLink : styles.navItem}
                                >
                                    Doação
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/estoque" 
                                    className={({ isActive }) => isActive ? styles.activeLink : styles.navItem}
                                >
                                    Estoque
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/sobre" 
                                    className={({ isActive }) => isActive ? styles.activeLink : styles.navItem}
                                >
                                    Sobre
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/solicitacao" 
                                    className={({ isActive }) => isActive ? styles.activeLink : styles.navItem}
                                >
                                    Solicitação
                                </NavLink>
                            </li>
                            <li>
                                <NavLink 
                                    to="/suporte" 
                                    className={({ isActive }) => isActive ? styles.activeLink : styles.navItem}
                                >
                                    Suporte
                                </NavLink>
                            </li>
                        </ul>
                    </nav>
                </header>

                {menuOpen && <div className={styles.escMenu} onClick={toggleMenu}></div>}
            </div>
        </>
    );
}

export default NavBar;
