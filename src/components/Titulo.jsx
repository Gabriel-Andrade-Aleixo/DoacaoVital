import styles from "../styles/Titulo.module.css"

function Titulo({ Titu }) {
    return (
        <>
            <h1>{Titu}</h1>
            <hr className={styles.hrTit}/>
        </>
    );
}

export default Titulo;
