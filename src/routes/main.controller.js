const express = require('express');

const dummyRouter = require('./dummyes/index');
const internationalRouter = require('./international/index');
const nationalRouter = require('./national/index');

const routerApi = (app) => {
    app.use('/dummy', dummyRouter);
    app.use('/international', internationalRouter);
    app.use('/national', nationalRouter);
    // esto se suma antes de las peticiones ex. /dummy/hola
};

module.exports = routerApi;