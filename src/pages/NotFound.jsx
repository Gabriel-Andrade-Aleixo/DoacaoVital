import React from 'react';
import { Link } from 'react-router-dom';
import Footer from "../components/Footer";
import NavBar from "../components/NavBar"

function NotFound() {
  return (
    <>
      <NavBar/>
      <div style={{ textAlign: 'center', padding: '50px' }}>
        <h1>404 - Página não encontrada</h1>
        <p>A página que você está procurando não existe.</p>
        <Link to="/" style={{ textDecoration: 'underline', color: 'blue' }}>
          Voltar para a página inicial
        </Link>
      </div>
      <Footer/>
    </>
  );
}

export default NotFound;