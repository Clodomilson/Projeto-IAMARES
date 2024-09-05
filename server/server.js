// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 5000;

app.get('/api/getPaymentLink', (req, res) => {
  // Lógica para gerar ou obter o link de pagamento
  const paymentLink = 'https://sualojacielo.com.br/superlink?id=123456';
  
  // Retorna o link de forma segura
  res.json({ link: paymentLink });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
