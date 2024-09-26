const express = require('express');
const colecaoUF = require('./Dados/dados.js');

const app = express();
app.get('/ufs', (req, res) =>{
    res.json(colecaoUF)
})
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080")
})