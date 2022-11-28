const express = require('express');
const app = express();
const confereHorario = require('./middlewares/horarioPermitodo');

app.use(confereHorario);

app.get('/', (req, res) => {
    res.json({mensagem: 'App em execucao'});
});

app.listen(3000, () => {
    console.log('App rodando na porta 3000');
});