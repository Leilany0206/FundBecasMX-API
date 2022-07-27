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

    findAll() {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (this.international) {
                    resolve(this.international);
                }
            }, 1000);
        });
    }
} 

module.exports = InternationalServices;