import NavBar from "../components/NavBar"
import Titulo from "../components/Titulo"
import TituloII from "../components/TituloII"
import Footer from "../components/Footer"

function Sobre() {
    return (
        <>
            <NavBar />
            <div className="DivInfoa">
                <Titulo Titu="Sobre Nós" />
                <TituloII Titu="Hemocentro"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus at repudiandae, tempore perspiciatis aut commodi hic non adipisci cum. Animi vel aliquam iure officia odio eveniet numquam magni quae culpa? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio, earum sunt eligendi, veritatis recusandae sapiente iste at porro, id dignissimos voluptatem officia laborum molestias doloremque laboriosam minima consequuntur quis libero. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem corporis adipisci, dignissimos eum modi perferendis inventore facilis hic magni a consequuntur fugiat vel obcaecati eveniet. Est eveniet illo libero temporibus.</p>
                <br />
                <TituloII Titu="Nossos Devs"/>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae omnis quos neque reiciendis necessitatibus, ex aperiam labore deserunt dolores ullam reprehenderit officiis dolor excepturi fugiat exercitationem sint ducimus cupiditate.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae omnis quos neque reiciendis necessitatibus, ex aperiam labore deserunt dolores ullam reprehenderit officiis dolor excepturi fugiat exercitationem sint ducimus cupiditate.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae omnis quos neque reiciendis necessitatibus, ex aperiam labore deserunt dolores ullam reprehenderit officiis dolor excepturi fugiat exercitationem sint ducimus cupiditate.</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta quae omnis quos neque reiciendis necessitatibus, ex aperiam labore deserunt dolores ullam reprehenderit officiis dolor excepturi fugiat exercitationem sint ducimus cupiditate.</p>
                <br />
                <p>Fotos Fodas</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quas est cum nostrum minima sequi sit omnis voluptates esse, eveniet vitae neque exercitationem nam repudiandae, veritatis eaque nisi? Quidem, tempora?</p>
            </div>
            <Footer />
        </>
    )
}

export default Sobre