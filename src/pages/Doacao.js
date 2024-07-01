// src/pages/Doacao.js
import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import qrcode from '../assets/images/qrcode.png';
import './Doacao.css';
import CheckoutForm from '../components/CheckoutForm';

const stripePromise = loadStripe('SUA_CHAVE_PUBLICA_STRIPE'); // Substitua pela sua chave pública do Stripe

const Doacao = () => {
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
            <h2>Doe com Cartão de Crédito</h2>
            <Elements stripe={stripePromise}>
              <CheckoutForm />
            </Elements>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Doacao;
