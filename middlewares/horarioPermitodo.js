const confereHorario = (req, res, next) => {
    let date = new Date();
    let hora = date.getHours();
    if (hora >= 18) {
        return res.json({mensagem: 'Nesse horário não é permitido fazer essa requisição'});
    }
    next();
}

module.exports = confereHorario;
