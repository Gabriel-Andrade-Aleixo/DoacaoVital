import { Navigate, Route, Routes } from "react-router-dom";
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Doacao from "./pages/Doacao";
import Estoque from "./pages/Estoque";
import Sobre from "./pages/Sobre";
import Solicitacao from "./pages/Solicitacao";
import Suporte from "./pages/Suporte";
import HomeLogin from "./pages/HomeLogin";
import NavBar from "./components/NavBar";


function App() {
  return (
    <>
      <Routes>
        <Route index element={<Navigate replace to="/inicio" />} />
        <Route path="/inicio" element={<HomeLogin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/doacao" element={<Doacao />}/>
        <Route path="/estoque" element={<Estoque />}/>
        <Route path="/sobre" element={<Sobre />}/>
        <Route path="/solicitacao" element={<Solicitacao />}/>
        <Route path="/suporte" element={<Suporte />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App;
