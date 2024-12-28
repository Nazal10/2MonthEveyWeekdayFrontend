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