import styles from '../styles/Footer.module.css'
import { FaFacebook, FaTwitter, FaInstagram, FaGithub } from 'react-icons/fa';

function Footer() {
    return (
        <>
            <hr className={styles.hrFoot} />
            <footer className={styles.footer}>
                <div className={styles.components}>

                    <p className={styles.texto}>© 2024 - Hudson Bárbara, Gabriel Aleixo, Gabriel Camara, Uriel Araújo. Todos os direitos reservados.</p>

                    <div className={styles.socialLinks}>
                        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                            <FaFacebook className={styles.icon} />
                        </a>
                        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                            <FaTwitter className={styles.icon} />
                        </a>
                        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                            <FaInstagram className={styles.icon} />
                        </a>
                        <a href="https://github.com/Gabriel-Andrade-Aleixo" target="_blank" rel="noopener noreferrer">
                            <FaGithub className={styles.icon} />
                        </a>
                    </div>

                </div>
            </footer>
        </>
    );
}

export default Footer;
