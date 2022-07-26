const express = require('express');
const dummyesRouter = express.Router();

dummyesRouter.get('/hola', (req, res) => {
    // Podrías agregar una descripción más detallada desde otro archivo o buscar que se muestre el readme
    res.send('hola mundo')
});

module.exports = dummyesRouter;