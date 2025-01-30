import express from 'express';
import { retornaCampeonato } from './servico/retornaCampeonato_servico.js';

const app = express();

app.get('/campeonatos', async(req,res) =>{
    const campeonatos = await retornaCampeonato()
    res.json(campeonatos);
})

app.listen(9000, async () => {
    const data = new Date();
    console.log("Servidor node iniciado em:" +data);
})
    
    