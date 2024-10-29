const express = require('express');
const path = require('path');

const app = express();
const port = 3000;

// rota para servir html.
app.use(express.static(path.join(__dirname)));

// inicia aqui o servidor.
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
