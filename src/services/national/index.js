const { response } = require("express");

class nationalServices {

    constructor() {
        this.national = [];
        this.generateData();
    }

    generateData() {
        this.national = [
            { id: 1, nombre: "Bécalos BeTech", tipo: "Pago de estudios", pregrado: false, posgrado: false },
            { id: 2, nombre: "Bécalos English Challenge", tipo: "Idioma", pregrado: true, posgrado: false },
            { id: 3, nombre: "BécALAS", tipo: "Mentoria", pregrado: true, posgrado: true },
            { id: 4, nombre: "Tu futuro con Bécalos", tipo: "Apoyo económico", pregrado: true, posgrado: false }
        ];
    }

    findAll(tipo) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (tipo) {
                    const filteredData = this.national.filter(scholarship => scholarship.tipo === tipo);
                    resolve(filteredData);
                }
                resolve(this.national);
            }, 0);
        });
    }

    findOne(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const scholarship = this.national.find(scholarship => scholarship.id === parseInt(id));
                if (scholarship) {
                    resolve(scholarship);
                }
            }, 0);
        });
    }

    create(newScholarship){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.national.push(newScholarship);
                let auxId = this.national.length;
                const response = { message: `¡Beca #${auxId} agregada correctamente!` }
                resolve(response);
            }, 10);
        });    
    };

    editPartial(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const findIndex = this.national.findIndex( scholarship => scholarship.id === parseInt(id) );
                if (findIndex !== -1) {
                    const nationalCopy = { ...this.national[findIndex] };
                    this.national[findIndex] = { ...nationalCopy, ...body };
                    const response = { message: 'Beca modificada correctamente', body };
                    resolve(response);
                };
            }, 10);
        });
    };

    editComplete(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const findIndex = this.national.findIndex( scholarship => scholarship.id === parseInt(id) );
                if (findIndex !== -1) {
                    const nationalCopy = { ...this.national[findIndex] };
                    this.national[findIndex] = { ...nationalCopy, ...body };
                    const response = { message: 'Beca modificada correctamente', body };
                    resolve(response);
                };
            }, 10);
        });
    };

    delete(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const findIndex = this.national.findIndex( scholarship => scholarship.id === parseInt(id) );
                if (findIndex !== -1) {
                    const nationalCopy = [ ...this.national ];
                    nationalCopy.splice( findIndex, 1 );
                    this.national = [ ...nationalCopy];

                    resolve(this.national);
                } else res.json({ message: 'El id que trata modificar no existe'})
            }, 0);
        });
    }
} 

module.exports = nationalServices;