import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <nav>
                <li>
                    <Link to="/">
                        Inicio
                    </Link>
                </li>
            </nav>
        </>
    )
};

export default NavBar;