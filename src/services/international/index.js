const { response } = require("express");
const axios = require("axios");

class InternationalServices {

    constructor() {
        this.international = [];
        this.generateData();
    }

    generateData() {
        this.international = [
            { id: 1, name: "KGSP", country: "South Korea", undergraduate: true, graduate: true },
            { id: 2, name: "Turkiye Burslari", country: "Turkey", undergraduate: true, graduate: true },
            { id: 3, name: "Adobe internship", country: "USA", undergraduate: false, graduate: false },
            { id: 4, name: "Monbukagakusho MEXT", country: "Japan", undergraduate: true, graduate: true }
        ];
    }

    findAll(country) {
        return new Promise((resolve, reject) => {
            setTimeout(async() => {
                let info = this.international;
                if (country) {
                    info = this.international.filter(scholarship => scholarship.country === country);
                }
                for (let i = 0; i < info.length; i++) {
                    const response = await axios.get(`https://travelbriefing.org/${info[i].country}?format=json`);
                    if (response && response.data) {
                        const dataLanguage = response?.data?.language || {}
                        const dataTime = response?.data?.timezone || {}
                        info[i] = { ...info[i], language: dataLanguage, timezone: dataTime }
                        console.log(info[i])
                    }
                }
                resolve(info);
            }, 0);
        });
    }

    findOne(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const scholarship = this.international.find(scholarship => scholarship.id === parseInt(id));
                if (scholarship) {
                    resolve(scholarship);
                }
            }, 0);
        });
    }

    create(newScholarship){
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                this.international.push(newScholarship);
                let auxId = this.international.length;
                const response = { message: `¡Beca #${auxId} agregada correctamente!` }
                resolve(response);
            }, 0);
        });    
    };

    editPartial(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const findIndex = this.international.findIndex( scholarship => scholarship.id === parseInt(id) );
                if (findIndex !== -1) {
                    const internationalCopy = { ...this.international[findIndex] };
                    this.international[findIndex] = { ...internationalCopy, ...body };
                    const response = { message: 'Beca modificada correctamente', body };
                    resolve(response);
                };
            }, 0);
        });
    };

    editComplete(id, body) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const findIndex = this.international.findIndex( scholarship => scholarship.id === parseInt(id) );
                if (findIndex !== -1) {
                    const internationalCopy = { ...this.international[findIndex] };
                    this.international[findIndex] = { ...internationalCopy, ...body };
                    const response = { message: 'Beca modificada correctamente', body };
                    resolve(response);
                };
            }, 0);
        });
    };

    delete(id) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                const findIndex = this.international.findIndex( scholarship => scholarship.id === parseInt(id) );
                if (findIndex !== -1) {
                    const internationalCopy = [ ...this.international ];
                    internationalCopy.splice( findIndex, 1 );
                    this.international = [ ...internationalCopy];

                    resolve(this.international);
                } else res.json({ message: 'El id que trata modificar no existe'})
            }, 0);
        });
    }
} 

module.exports = InternationalServices;