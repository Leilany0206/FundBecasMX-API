const express = require('express');
const internationalRouter = express.Router();
const InternationalServices = require('../../services/international/index');

const internationalService = new InternationalServices();

// GET 
// internationalRouter.get('/', (req, res) => {
// BONUS: Podrías agregar una descripción más detallada desde otro archivo o buscar que se muestre el readme
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
internationalRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const internationalID = await internationalService.findOne(id);
        res.status(200).json(internationalID);
    } catch(error) {
        res.status(404).json({ message: 'No existe una beca con ese id'})
    }
});

// POST
    // BONUS: Investigar cómo agregar un id continuo sin conocer todo el array
internationalRouter.post('/', async (req, res) => {
    const newScholarship = req.body;
    try {
        const internationalCreated = await internationalService.create(newScholarship);
        res.status(201).json(internationalCreated);
    } catch(error) {
        res.status(501).json({ message: 'No fue posible agregar la beca'})
    }
});
 
// PATCH
internationalRouter.patch('/:id', async (req, res) => {
    const body = req.body;
    const { id }= req.params;

    try {
        const internationalPatch = await internationalService.editPartial(id, body);
        res.status(201).json(internationalPatch);
    } catch(error) {
        res.status(404).json({ message: 'No fue posible modificar la beca'})
    }
});
 
// PUT
internationalRouter.put('/:id', async (req, res) => {
    const body = req.body;
    const { id }= req.params;

    try {
        const internationalPatch = await internationalService.editComplete(id, body);
        res.status(201).json(internationalPatch);
    } catch(error) {
        res.status(404).json({ message: 'No fue posible modificar la beca'})
    }
});
 
// DELETE
internationalRouter.delete('/:id', async(req, res) => {
    const { id }= req.params;
    try {
        const international = await internationalService.delete(id);
        res.status(200).json(international);
    } catch(error) {
        res.status(404).json({ message: 'No existe una beca con ese id'});
    };
});

module.exports = internationalRouter;