// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Contatos from './pages/Contatos';
import Cadastro from './pages/Cadastro';
import Sobre from './pages/Sobre';
import Doacao from './pages/Doacao';

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contatos" element={<Contatos />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/sobre" element={<Sobre />} />
        <Route path="/doacao" element={<Doacao />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
