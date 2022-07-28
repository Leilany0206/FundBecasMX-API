const express = require('express');
const colors = require('colors');

// CORS
const cors = require('cors');

const routerApi = require('./routes/main.controller')

const app = express();
const port = 3000;

// MIDDLEWARE
app.use(express.json());

// CORS
const whitelist = ['http://127.0.0.1:5500']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
};
app.use(cors(corsOptions));

// ROOT ENDPOINT
app.get('/', (req, res) => {
    res.send('Bienvenido a la API FundBecasMX')
});

app.listen(port, () => {
    console.log('Servidor express listening...'.rainbow)
});

routerApi(app);