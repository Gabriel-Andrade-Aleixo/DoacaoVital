import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Titulo from "../components/Titulo";
import TituloII from "../components/TituloII";
import NomeLegal from "../media/images/icon.png";

function Home() {
    return (
        <>
            <NavBar />
            <div className="DivInfoa">
                <Titulo Titu="Inicio" />
                <div className="DivInfob">
                    <TituloII Titu="Doação"></TituloII>
                    <div className="flex2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum officia unde nisi enim error necessitatibus atque vero asperiores, quos animi porro cumque perferendis aut laborum minus quia distinctio? Commodi!</p>
                        <img src={NomeLegal} alt="Descrição" />
                    </div>

                    <TituloII Titu="Estoque"></TituloII>

                    <div className="flex">
                        <img src={NomeLegal} alt="Descrição" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum officia unde nisi enim error necessitatibus atque vero asperiores, quos animi porro cumque perferendis aut laborum minus quia distinctio? Commodi!</p>
                    </div>
                    
                    <TituloII Titu="Solicitação"></TituloII>
                    <div className="flex2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum officia unde nisi enim error necessitatibus atque vero asperiores, quos animi porro cumque perferendis aut laborum minus quia distinctio? Commodi!</p>
                        <img src={NomeLegal} alt="Descrição" />
                    </div>
                    <TituloII Titu="Suporte"></TituloII>
                    <div className="flex">
                        <img src={NomeLegal} alt="Descrição" />
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum officia unde nisi enim error necessitatibus atque vero asperiores, quos animi porro cumque perferendis aut laborum minus quia distinctio? Commodi!</p>
                    </div>
                    <TituloII Titu="Sobre"></TituloII>
                    <div className="flex2">
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius eum officia unde nisi enim error necessitatibus atque vero asperiores, quos animi porro cumque perferendis aut laborum minus quia distinctio? Commodi!</p>
                        <img src={NomeLegal} alt="Descrição" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home