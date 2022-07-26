const express = require('express');
const colors = require('colors');
const routerApi = require('./routes/main.controller')

const app = express();
const port = 3000;

// MIDDLEWARE
app.use(express.json());

app.listen(port, () => {
    console.log('Servidor express listening...'.rainbow)
});

routerApi(app);