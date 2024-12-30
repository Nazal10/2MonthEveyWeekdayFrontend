// Local Storage
// Local Storage, tarayicida veri saklamak icin kullanilan bir API'dir.
// Local Storage'a veri eklemek icin setItem() metodu kullanilir.
// Local Storage'dan veri almak icin getItem() metodu kullanilir.
// Local Storage'dan veri silmek icin removeItem() metodu kullanilir.
// Local Storage'daki tum verileri silmek icin clear() metodu kullanilir.
// Local Storage'daki verileri gormek icin console'da localStorage yazilabilir.
// Local Storage'da veri saklamak icin sadece String veri tipi kullanilabilir.
// Local Storage'da veri saklamak icin JSON.stringify() ve JSON.parse() metodlari kullanilabilir.


// Local Storage'a veri eklemek.
let userName = "Abdinasir";
localStorage.setItem("Magaca", userName);

// Local Storage'dan veri almak.
let Magaca = localStorage.getItem("Magaca");
console.log(Magaca);

let Age = 25;
localStorage.setItem("Dada", Age);
let Dada = localStorage.getItem("Dada");
console.log(Dada);
console.log(typeof age);

let yas =33;
localStorage.setItem("jirka", yas);
let jirka = Number(localStorage.getItem("jirka"));
console.log(jirka);
console.log(typeof jirka);

let Shaqaale = {
    name: "Jaamac",
    age: 23,
    city: "Vienna",
    languages: ["Python", "Java", "JavaScript"],
};

// JSON.stringify() metodu ile objeyi string'e çevirme
localStorage.setItem("XogtaShaqaalaha",JSON.stringify(Shaqaale));

// JSON.parse() metodu ile string'i objeye çevirme, Console de gormek icin.
let XogtaShaqaalaha = JSON.parse(localStorage.getItem("XogtaShaqaalaha"));
console.log(XogtaShaqaalaha);

let isticmaale = [
    {name: "Jaamac", age: 34},
    {name: "Warfaa", age: 42},
    {name: "Hinda", age:19},
]

localStorage.setItem("isticmaleDetails", JSON.stringify(isticmaale));

let isticmaleDetails = JSON.parse(localStorage.getItem("isticmaleDetails"));

console.log(isticmaleDetails);
isticmaleDetails.map((isticmaale) => {
    document.write(`<p> ${isticmaale.name} - ${isticmaale.age}</p>`)
});

// Session Storage

let jaariyad = [
    {name: "Fartuun", age: 24},
    {name: "Nuux", age: 55},
    {name: "Hinda", age: 19},
]
sessionStorage.setItem("jaariyad", JSON.stringify(jaariyad));

let jaariyadDetails = JSON.parse(sessionStorage.getItem("jaariyad"));

console.log(jaariyadDetails);
jaariyadDetails.map((jaariyad) => {
    document.write(`<p> ${jaariyad.name} - ${jaariyad.age}</p>`)
});

let daYarta = jaariyadDetails.filter((jaariyad) => jaariyad.age <25);

daYarta.map((jaariyad) => {
    document.write(`<p> ${jaariyad.name} - ${jaariyad.age}</p>`);
});


const tirooyin = [55,37,13,96,32,78,94,93];
let langs = ["Python", "Java", "C++", "Javascript"];

const natiijo = tirooyin.reduce((tiroGuud, tiro) => {
    return tiroGuud + tiro;
}, 0);

console.log(natiijo);

//Spread Operator iki dizi birlestirmek.
const natiijo2 = [...langs, ...tirooyin];
console.log(natiijo2);

langs = [...langs, "C#"];
console.log(langs);


// Destructing Assignment
let ShaqaaleCopy = {
    name: "Jaamac",
    da: 23,
    city: "Vienna",
    languages: ["Python", "Java", "JavaScript"],
};

let {name, da, ...intaHartay} = ShaqaaleCopy;
console.log(name, da, intaHartay);

let tirooyinCopy = [3,5,6,34,21,678,44,99];
let [a,b, ...c] = tirooyinCopy;
console.log(a,b,c);