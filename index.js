const express = require('express');
const colors = require('colors');
const app = express();
const port = 3000;

// MIDDLEWARE
app.use(express.json());

const international = [
    { id: 1, name: "KGSP", country: "Corea del Sur", undergraduate: true, graduate: true },
    { id: 2, name: "Turkiye Burslari", country: "Turquía", undergraduate: true, graduate: true },
    { id: 3, name: "Adobe internship", country: "USA", undergraduate: false, graduate: false },
    { id: 4, name: "Monbukagakusho MEXT", country: "Japón", undergraduate: true, graduate: true }
];

app.listen(port, () => {
    console.log('Servidor express listening...'.rainbow)
});

// GET GENERAL
app.get('/', (req, res) => {
    // Podrías agregar una descripción más detallada desde otro archivo o buscar que se muestre el readme
    res.send('Bienvenido a FundBecasMX API')
});

// GET INTERNATIONAL
app.get('/international', (req, res) => {
    res.json(international);
});

app.get('/international/:id')

// GET CON QUERY PARAMS 
    // Termina get 
app.get ('/international', (req, res) => {
    const { name, country, undergraduate } = req.query;

    if (name && country && undergraduate) {
        res.json({ name, country, undergraduate });
    } else {
        res.send('No está bien');
    }
});

console.log(international.length);

// POST
app.post('/international', (req, res) => {
    const newScholarship = req.body;
    international.push(newScholarship);
    let auxId = international.length;
    let response = { message: `¡Beca #${auxId} agregada correctamente!`}
    res.status(201).json(response);
});

// 