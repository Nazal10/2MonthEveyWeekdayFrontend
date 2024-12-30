
// Yapıcı Fonksiyon (Constructor)

function Dumar (magaceeda, dadeeda, magaladeeda){
        this.magaceeda = magaceeda;
        this.dadeeda = dadeeda;
        this.magaladeeda = magaladeeda;

    //     this.showInfos = function(){
    //         console.log(this.magaceeda, this.dadeeda, this.magaladeeda);
    // };
}
    Dumar.prototype.showInfos = function(){
        console.log("Magaceeda", this.magaceeda,"Da'deeda", this.dadeeda,"Magaaladeeda", this.magaladeeda);
    };

function EmployeeM (magaceeda, dadeeda, magaladeeda, salary, shift) {
    Dumar.call(this, magaceeda, dadeeda, magaladeeda);
    this.salary = salary;
    this.shift = shift;
}
EmployeeM.prototype = Object.create(Dumar.prototype);

const dumar1 = new Dumar("Fardowso", 40, "Jowhar");
const dumar2 = new Dumar("Nuurto", 35, "Baardheere");


console.log(dumar1);
console.log(dumar2);
dumar1.showInfos();
dumar2.showInfos();
console.log("Magaca Magaaladeeda =",dumar1.magaladeeda);