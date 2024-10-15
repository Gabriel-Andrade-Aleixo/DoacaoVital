import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (

    <div style={{ textAlign: 'center', padding: '50px' }}>
      <NavBar />
      <h1>404 - Página não encontrada</h1>
      <p>A página que você está procurando não existe.</p>
      <Link to="/" style={{ textDecoration: 'underline', color: 'blue' }}>
        Voltar para a página inicial
      </Link>
    </div>
  );
}

export default NotFound;