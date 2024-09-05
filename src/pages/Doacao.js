// src/pages/Doacao.js
import React from 'react';
import qrcode from '../assets/images/qrcode.png';
import './Doacao.css';

const Doacao = () => {
  const handleDonateClick = async () => {
    try {
      // Faz uma chamada para o backend para obter o link de pagamento
      const response = await fetch('/api/getPaymentLink');
      if (!response.ok) {
        throw new Error('Erro ao obter o link de pagamento.');
      }
      const data = await response.json();
      window.location.href = data.link; // Redireciona para o link seguro
    } catch (error) {
      console.error('Erro:', error);
      alert('Houve um problema ao processar sua doação. Tente novamente mais tarde.');
    }
  };

  return (
    <div className="doacao container">
      <h1 className="text-center">Faça uma Doação</h1>
      <p className="text-center">Obrigado por considerar fazer uma doação para nossa ONG.</p>
      <div className="row">
        <div className="col-md-6 text-center">
          <div className="qrcode-container">
            <img src={qrcode} alt="QR Code para doação via Pix" className="qrcode" />
            <p>Escaneie o QR Code para doar via Pix</p>
          </div>
        </div>
        <div className="col-md-6 text-center">
          <div className="credit-card-donation">
            <h2>Doe com Link de Pagamento</h2>
            <button onClick={handleDonateClick} className="btn btn-primary">
              Fazer Doação
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doacao;
