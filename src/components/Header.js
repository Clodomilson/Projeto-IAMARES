// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import logo_removebg from '../assets/images/logo_removebg.png';  // Importação da imagem

const Header = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="logo">
        <Link to="/"><img src={logo_removebg} alt="Logo da ONG" />  {/* Uso da imagem importada */}</Link>
        
      </div>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link className="nav-link" to="/">Home</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/contatos">Contatos</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/cadastro">Cadastro</Link>
          </li> */}
          <li className="nav-item">
            <Link className="nav-link" to="/sobre">Sobre</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/doacao">Doação</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
