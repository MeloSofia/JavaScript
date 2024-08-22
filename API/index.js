const express = require  ('express'); 
const app = express (); 

app.get ('/',(req, res) => { 
    res.send ('Hello word') 
}) ;
    
app.listen (8080, () => { 
    let data = new Date(); 
    console.log("Servidor iniciado em: "+data);
});