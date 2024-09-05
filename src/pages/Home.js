// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div class="fundo-transparente">
        <h1>Bem-vindo à Iamares</h1>
        <p>Transformando vidas através da solidariedade.</p>
        <Link to="/doacao" className="btn btn-primary">Doe Agora</Link>
      </div>
    </div>
  );
};

export default Home;
