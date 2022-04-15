const express = require('express');
const conectarDB=require('./config/db');
const cors = require('cors');

//creamos el server
const app = express();


//conectamos la bd
conectarDB();
app.use(cors())

app.use(express.json());
app.use('/api/productos', require('./routes/producto'));

/*
app.get('/', (req, res) =>{
    res.send('Hola');
})
*/

app.listen(4000, () =>{
        console.log('El servidor esta corriendo perfectamente.');
})