import { Link } from "react-router-dom";
import NavBar from "../components/NavBar";
import styles from '../styles/HomeLogin.module.css';
import Footer from "../components/Footer";

function HomeLogin() {
    return (
        <>
            <NavBar />

            <div className={styles.banner}>
                <button onClick={() => window.location.href = "/home"}>Home</button>
            </div>
        </>

    )
}

export default HomeLogin