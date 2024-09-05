const express = require  ('express'); 
const app = express (); 

// Outra forma de declarar

// app.get ('/',(req, res) => { 
//     req.json({mensagem: 'Hello word'}) 
// }) ;

app.get ('/',(req, res) => { 
    let mensagem = ({mensagem: 'oi world'}) 
    res.json(mensagem)
}) ;
    
app.listen (8080, () => { 
    let data = new Date(); 
    console.log("Servidor iniciado em: "+data);
});