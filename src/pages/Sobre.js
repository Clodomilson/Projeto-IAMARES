// src/pages/Sobre.js
import React from 'react';
import logo_removebg from '../assets/images/logo_removebg.png';  // Import
import areas_atuacao from '../assets/images/areas_atuacao.png';
import './Sobre.css'

const Sobre = () => {
  return (
    <div className="sobre">
      <div className='logo-removebg'>
        <img src={logo_removebg} alt="Logo da ONG" />  {/* Uso da imagem importada */}
      </div>
      <div className='slogan-project'>
        <h2>Desenvolvendo Educação, Saúde, Esporte, Capacitação Profissional, Ressocialização e sustentabilidade</h2>
      </div>
      <div className='about-text'>
        <h1>Quem somos</h1>
        <p>O Instituto IAMARES é uma associação civil beneficente com sede na cidade de São Luís - Maranhão tendo como alvo promover ações que visem o bem estar e desenvolvimento social da comunidade, devolvendo dignidade e cidadania aos filhos de nosso país.</p>
        <h1>Missão</h1>
        <p>Nossa missão é criar um mundo mais justo, onde todos tenham acesso a oportunidades, direitos e qualidade e  ida.<br /> Trabalhamos incansavelmente para promover mudanças positivas, mobilizando recursos e desenvolvendo  projetos e programas que impactem de forma significativa a sociedade.</p>
        <h1>Visão</h1>
        <p>Nossa visão é um futuro onde cada indivíduo possa alcançar seu pleno potencial e viver em uma sociedade  mais justa e equitativa.</p>
        <h1>Valores</h1>
        <ol>
          <li>Empatia</li>
          <li>Igualdade</li>
          <li>Justiça social</li>
          <li>Responsabilidade</li>
          <li>Colaboração</li>
          <li>Inovação</li>
          <li>Sustentabilidade</li>
        </ol>
        <h1>Áreas de atuação</h1>
        <div className='areas-atuacao'>
          <img src={areas_atuacao} alt="Áreas de atuação" />
        </div>
      </div>
    </div>
  );
};

export default Sobre;
