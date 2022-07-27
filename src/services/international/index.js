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
} 

module.exports = InternationalServices;