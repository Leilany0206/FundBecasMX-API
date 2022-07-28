class InternationalServices {

    constructor() {
        this.international = [];
        this.generateData();
    }

    generateData() {
        this.international = [
            { id: 1, name: "KGSP", country: "Corea del Sur", undergraduate: true, graduate: true },
            { id: 2, name: "Turkiye Burslari", country: "Turquía", undergraduate: true, graduate: true },
            { id: 3, name: "Adobe internship", country: "USA", undergraduate: false, graduate: false },
            { id: 4, name: "Monbukagakusho MEXT", country: "Japón", undergraduate: true, graduate: true }
        ];
    }

    findAll(country) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (country) {
                    const filteredData = this.international.filter(scholarship => scholarship.country === country);
                    resolve(filteredData);
                    console.log(filteredData)
                }
                resolve(this.international);
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
                let response = { message: `¡Beca #${auxId} agregada correctamente!` }
                resolve(response);
            }, 1000);
        });    
    }

    ediPartial() {

    }

    editComplete() {
        s
    }

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