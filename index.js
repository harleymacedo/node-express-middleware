const express = require('express');
const app = express();
const confereHorario = require('./middlewares/horarioPermitodo');
const registrarAtividade = require('./middlewares/logAtividade');

app.use(confereHorario);
app.use(registrarAtividade);

app.get('/', (req, res) => {
    res.json({mensagem: 'App em execucao'});
});

app.listen(3000, () => {
    console.log('App rodando na porta 3000');
});
