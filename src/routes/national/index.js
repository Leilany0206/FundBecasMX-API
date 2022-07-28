const express = require('express');
const nationalRouter = express.Router();
const nationalServices = require('../../services/national/index');

const nationalService = new nationalServices();

// GET 
// nationalRouter.get('/', (req, res) => {
// BONUS: Podrías agregar una descripción más detallada desde otro archivo o buscar que se muestre el readme
//     res.send('Bienvenido a FundBecasMX API')
// });

// GET national
nationalRouter.get('/', async(req, res) => {
    const { tipo } = req.query;
    try {
        const national = await nationalService.findAll(tipo);
        res.status(200).json(national);
    } catch(error) {
        res.status(404).json({ message: 'No hay datos'})
    }
});


// GET SCHOLARSHIP BY ID
nationalRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const nationalID = await nationalService.findOne(id);
        res.status(200).json(nationalID);
    } catch(error) {
        res.status(404).json({ message: 'No existe una beca con ese id'})
    }
});

// POST
    // BONUS: Investigar cómo agregar un id continuo sin conocer todo el array
nationalRouter.post('/', async (req, res) => {
    const newScholarship = req.body;
    try {
        const nationalCreated = await nationalService.create(newScholarship);
        res.status(201).json(nationalCreated);
    } catch(error) {
        res.status(501).json({ message: 'No fue posible agregar la beca'})
    }
});
 
// PATCH
nationalRouter.patch('/:id', async (req, res) => {
    const body = req.body;
    const { id }= req.params;

    try {
        const nationalPatch = await nationalService.editPartial(id, body);
        res.status(200).json(nationalPatch);
    } catch(error) {
        res.status(501).json({ message: 'No fue posible modificar la beca'})
    }
});
 
// PUT
nationalRouter.put('/:id', async (req, res) => {
    const body = req.body;
    const { id }= req.params;

    try {
        const nationalPatch = await nationalService.editComplete(id, body);
        res.status(200).json(nationalPatch);
    } catch(error) {
        res.status(501).json({ message: 'No fue posible modificar la beca'})
    }
});
 
// DELETE
nationalRouter.delete('/:id', async(req, res) => {
    const { id }= req.params;
    try {
        const national = await nationalService.delete(id);
        res.status(200).json(national);
    } catch(error) {
        res.status(404).json({ message: 'No existe una beca con ese id'});
    };
});

module.exports = nationalRouter;