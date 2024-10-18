import NavBar from "../components/NavBar"
import Titulo from "../components/Titulo"
import styles from "../styles/Titulo.module.css"
import Footer from "../components/Footer"

function Sobre() {
    return (
        <>
            <NavBar />
            <Titulo Titu="Sobre Nós"/>
            <Footer />
        </>
    )
}

export default Sobre