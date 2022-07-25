const express = require('express');
const colors = require('colors');
const app = express();
const port = 3000;

app.use(express.json());

app.listen(port, () => {
    console.log('Servidor express listening...'.rainbow)
});

app.get('/', (req, res) => {
    res.send('hola mundo');
});