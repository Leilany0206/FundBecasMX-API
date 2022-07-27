const express = require('express');
const internationalRouter = express.Router();
const InternationalServices = require('../../services/international/index');

const internationalService = new InternationalServices();

// GET 
// internationalRouter.get('/', (req, res) => {
//     // Podrías agregar una descripción más detallada desde otro archivo o buscar que se muestre el readme
//     res.send('Bienvenido a FundBecasMX API')
// });

// GET INTERNATIONAL
internationalRouter.get('/', async(req, res) => {
    const { country } = req.query;
    try {
        const international = await internationalService.findAll(country);
        res.status(200).json(international);
    } catch(error) {
        res.status(404).json({ message: 'No hay datos'})
    }
});


// GET SCHOLARSHIP BY ID
internationalRouter.get('/:id', async(req, res) => {
    const { id } = req.params;
    try {
        const internationalID = await internationalService.findOne(id);
        res.status(200).json(internationalID);
    } catch(error) {
        res.status(404).json({ message: 'No existe una beca con ese id'})
    }
});

// POST
    // Investigar cómo agregar un id continuo sin conocer todo el array
internationalRouter.post('/international', (req, res) => {
    const newScholarship = req.body;
    international.push(newScholarship);
    let auxId = international.length;
    let response = { message: `¡Beca #${auxId} agregada correctamente!`}
    res.status(201).json(response);
 
    console.log(international);
});
 
// PATCH
internationalRouter.patch('/international/:id', (req, res) => {
    const body = req.body;
    const { id }= req.params;
    const findIndex = international.findIndex( scholarship => scholarship.id === parseInt(id) )
    if (findIndex !== -1) {
        const internationalCopy = { ...international[findIndex] };
        international[findIndex] = { ...internationalCopy, ...body }
        res.json({ message: 'Beca modificada correctamente', body })
    } else res.json({ message: 'El id que trata modificar no existe'})
});
 
// PUT
internationalRouter.put('/international/:id', (req, res) => {
    const body = req.body;
    const { id }= req.params;
    const findIndex = international.findIndex( scholarship => scholarship.id === parseInt(id) )
    if (findIndex !== -1) {
        const internationalCopy = { ...international[findIndex] };
        international[findIndex] = { ...internationalCopy, ...body }
        res.json({ message: 'Beca modificada correctamente', body })
    } else res.json({ message: 'El id que trata modificar no existe'})
});
 
// DELETE
internationalRouter.delete('/international/:id', (req, res) => {
    const body = req.body;
    const { id }= req.params;
    const findIndex = international.findIndex( scholarship => scholarship.id === parseInt(id) )
    if (findIndex !== -1) {
        const internationalCopy = [ ...international ];
        internationalCopy.splice( findIndex, 1 )
        international = [ ...internationalCopy]
 
    } else res.json({ message: 'El id que trata modificar no existe'})
});

module.exports = internationalRouter;