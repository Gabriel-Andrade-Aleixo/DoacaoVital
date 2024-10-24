import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import Titulo from "../components/Titulo";
import TituloII from "../components/TituloII";
import NomeLegal from "../media/images/icon.png";
import cssHr from "../styles/Titulo.module.css";

function Home() {
    return (
        <>
            <NavBar />
            <div className="DivInfoa">
                <Titulo Titu="Inicio" />
                <div className="DivInfob">
                    <TituloII Titu="Doação"></TituloII>
                    <div className="flex2">
                        <p>Doação, Aqui é onde você pode agendar uma doação e tambem verificar hemocentros proximos de sua localização.</p>
                        <img src={NomeLegal} alt="Descrição" />
                    </div>
                    <hr className={cssHr.hrTit}/>

                    <TituloII Titu="Estoque"></TituloII>

                    <div className="flex">
                        <img src={NomeLegal} alt="Descrição" />
                        <p>Estoque, Aqui é onde você verificaria a quantidade de sangue que temos armazenado de cada tipo sanguineo, tambem mostramos estoques de outros hemocentros proximo a sua localização.</p>
                    </div>
                    <hr className={cssHr.hrTit}/>
                    
                    <TituloII Titu="Solicitação"></TituloII>
                    <div className="flex2">
                        <p>Solicitação, Aqui é onde você como cliente pode votar em nossas enquetes de funções a serem adicionadas no nosso site, atualizamos com novas enqueste mensalmente.</p>
                        <img src={NomeLegal} alt="Descrição" />
                    </div>
                    <hr className={cssHr.hrTit}/>

                    <TituloII Titu="Suporte"></TituloII>
                    <div className="flex">
                        <img src={NomeLegal} alt="Descrição" />
                        <p>Suporte, Aqui é onde você podera conversar com o suporte do nosso site e tirar suas duvidas ou reportar problemas do nosso site.</p>
                    </div>
                    <hr className={cssHr.hrTit}/>

                    <TituloII Titu="Sobre"></TituloII>
                    <div className="flex2">
                        <p>Sobre, Aqui é onde você podera nos conhecer melhor, entender o motivo deste site e por que ele é importante.</p>
                        <img src={NomeLegal} alt="Descrição" />
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Home