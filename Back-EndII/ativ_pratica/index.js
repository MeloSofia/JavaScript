const express = require('express');
const colecaoFilmes = require('./Filmes/filmes.js');

const app = express();
app.get('/filme/:idfilme', (req, res) =>{
    const idfilme = parseInt(req.params.idfilme);
    let mensagemErro = '';
    let filme;

    if (!(isNaN(idfilme))){
        uf = colecaoFilmes.colecaoFilmes.find(u => u.id === idfilme);
        if (!filme){
            mensagemErro = 'UF não encontrada!'
        }
    } else{
        mensagemErro = 'Requisição inválida!'
    }

    if (filme){
        res.json(filme);
    } else{
        res.status(404).json({"Erro": mensagemErro})
    }
})
app.listen(8080, () => {
    console.log("Servidor iniciado na porta 8080")
})