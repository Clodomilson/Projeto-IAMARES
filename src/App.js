// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Contatos from './pages/Contatos';
// import Cadastro from './pages/Cadastro';
import Sobre from './pages/Sobre';
import Doacao from './pages/Doacao';
import Layout from './components/Layout';

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contatos" element={<Contatos />} />
          {/* <Route path="/cadastro" element={<Cadastro />} /> */}
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/doacao" element={<Doacao />} />
        </Routes>
      </Layout>
    </Router>
    // <Router>
    //   <Header />
    //   <Routes>
    //     <Route path="/" element={<Home />} />
    //     <Route path="/contatos" element={<Contatos />} />
    //     {/* <Route path="/cadastro" element={<Cadastro />} /> */}
    //     <Route path="/sobre" element={<Sobre />} />
    //     <Route path="/doacao" element={<Doacao />} />
    //   </Routes>
    //   <Footer />
    // </Router>

  );
};

export default App;
