// Class
// Classlar ES6 ile birlikte gelmistir.
// Classlar bir blueprint'tir.
// Classlar ile objeler olusturulur.

class Macalimiinta {
    constructor (magaciisa, intaUuJiro, mushaarkiisa) {
        this.magaciisa = magaciisa;
        this.intaUuJiro = intaUuJiro;
        this.mushaarkiisa = mushaarkiisa;
    }
    showInfos() {
        console.log(`Magaciisa: ${this.magaciisa}, Inta-uu-jiro: ${this.intaUuJiro}, Mushaarkiisa: ${this.mushaarkiisa}`);
    }
}
const macalin1 = new Macalimiinta("Mustafa", 50, 2000);
const macalin2 = new Macalimiinta("Ahmed", 30, 3000);

console.log(macalin1);
console.log(macalin2);
macalin1.showInfos();
macalin2.showInfos();

//Static Methods
// Nesne uzerinde degil, sinif uzerinden cagrilir.

class Xisaab {
    cube (x) {
        console.log(x * x * x);
    }

    static cube2 (x) {
        console.log(x * x * x);
    }
}

const xisaab = new Xisaab();
// xisaab.cube2(3); // qalad ayuu soo saarayaa
xisaab.cube(3); // Sida saxda ah waa sidaan

Xisaab.cube2(7);// Dogru kullanımi
Math.random(); // Statik bir methoddur. Nesne üzerinden değil sınıf üzerinden çağrılır.


// Inheritance (katilim)
// Bir sinifin ozellikleri baska bir sinifta aktarmak icin kullanilir.

class Shaqsi {
    constructor (magaciisa, magacaQoyska) {
        this.magaciisa = magaciisa;
        this.magacaQoyska = magacaQoyska;
    }
    showInfos () {
        console.log(`Magaca: ${this.magaciisa}, Magaca Qoyska: ${this.magacaQoyska}`);
    }
}

class xamaali extends Shaqsi {
    constructor(magaciisa, magacaQoyska, mushaarkiisa) {
        // this.magaciisa = magaciisa;
        // this.magacaQoyska = magacaQoyska;
        super(magaciisa, magacaQoyska);
        this.mushaarkiisa = mushaarkiisa;
    }
}

const Shakhsi1 = new xamaali ("Nuuraani", "Muudeey", 5000);
console.log(Shaqsi);
Shakhsi1.showInfos();