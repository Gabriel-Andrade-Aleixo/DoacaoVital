import NavBar from "../components/NavBar";
import Titulo from "../components/Titulo";
import TituloII from "../components/TituloII";
import Footer from "../components/Footer";
import Hudson from "../media/images/Hudson.png"; 
import Uriel from "../media/images/Uriel.png";
import GabCamara from "../media/images/gab_camara.png";
import GabAleixo from "../media/images/gab_aleixo.jpg";

function Sobre() {
    return (
        <>
            <NavBar />
            <div className="DivInfoa">
                <Titulo Titu="Sobre Nós" />
                <TituloII Titu="Hemocentro"/>
                <p>Bem vindo ao nosso site de hemocentro, O objetivo do nosso site e ajudá-lo  a doar seu sangue em hemocentros mais proximos de sua cidade, temos suporte para retirar duvidas dde clientes e tambem ajudar nós a corrigir bugs no nosso site.
Temos a funçao de Solicitação onde mensalmente adicionamos topicos em que nossos clientes poderao votar, cada topico contem uma melhoria futura a ser adicionada, todas serao adicionadas com o tempo mas o motivo do voto é para sabermos qual
funçao deveria vir primeiro. Em nosso site vc tambem pode encontrar dados e estatisticas de outros hemocentros como: Quantidade de sangue estocado em outros hemocentros, Quantidade de cada tipo sanguineo presente nestes hemocentros e a localização de cada hemocentro.
</p>
                <br />
                <TituloII Titu="Nossos Devs"/>
                <p>°Hudson Ribeiro Barbara Junior: Um desenvolvedor iniciante, atualmente estudando DSM na fatec e formado em tecnico Mecatrônica.
                </p>
                <p>°Gabriel Andrade Aleixo: Um desenvolvedor iniciante, atualmente trabalhando na area de design,estudando DSM na fatec e formado em tecnico Mecatrônica.
                </p>
                <p>°Gabriel Camara De Oliveira: Um desenvolvedor iniciante, atualmente trabalhando na area de TI infra, estudando DSM na fatec.
                </p>
                <p>°Uriel Araújo: Um desenvolvedor iniciante, atualmente estudando DSM na fatec e formado em tecnico Desenvolvimento de Software (DS).
                </p>
                <br />
                <p>Fotos Fodas</p>
                <div style={{ 
                    display: 'flex', 
                    justifyContent: 'center', 
                    gap: '160px', 
                    marginTop: '20px', 
                    flexWrap: 'wrap' 
                }}>
                    <img 
                        src={Hudson} 
                        alt="Imagem de Hudson" 
                        style={{ 
                            width: '100%', 
                            maxWidth: '150px', 
                            height: 'auto', 
                            borderRadius: '50%', 
                            objectFit: 'cover',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                        }} 
                    />
                    <img 
                        src={Uriel} 
                        alt="Imagem de Uriel" 
                        style={{ 
                            width: '100%', 
                            maxWidth: '150px', 
                            height: 'auto', 
                            borderRadius: '50%', 
                            objectFit: 'cover',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                        }} 
                    />
                    <img 
                        src={GabCamara} 
                        alt="Imagem de Gabriel Câmara" 
                        style={{ 
                            width: '100%', 
                            maxWidth: '150px', 
                            height: 'auto', 
                            borderRadius: '50%', 
                            objectFit: 'cover',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                        }} 
                    />
                    <img 
                        src={GabAleixo} 
                        alt="Imagem de Gabriel Aleixo" 
                        style={{ 
                            width: '100%', 
                            maxWidth: '150px', 
                            height: 'auto', 
                            borderRadius: '50%', 
                            objectFit: 'cover',
                            boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)'
                        }} 
                    />
                </div>
                <p>Isso é nosso PI espero que tenham gostado do que viram e que nossos projetos irao cada vez mais evoluir com o tempo, agradeçemos sua atenção e um(a) Bom dia, Boa tarde, Boa noite.
                </p>
            </div>
            <Footer />
        </>
    );
}

export default Sobre;
