// JavaScript Login

console.log("Hi Javascript");

// VAriables= Değişkenler
var a = 10; // int or number
var b = 3.14; // number or int 

// String
var c = "Javascript"; // String

console.log(a);
console.log(typeof a);
console.log(a,b,c);

// Automatic type conversions = otomatic tip dönüşümleri
var firstnumber = 10;
var secondnumber ="30"; 
//String
console.log(firstnumber + secondnumber);
var result = firstnumber - secondnumber;
// var result = firstnumber + secondnumber;
console.log(result);
console.log(typeof result);

// hoisting!
var firstNumber;
console.log(firstNumber); // undefined, markaan lama define gareyn fristNumber ka
firstNumber = 20;
console.log(firstNumber); // 20 mrkaan 20 aa lagu define gareeyay.


testing ()
function testing () {
    console.log("first function");
}

// Boolean (true/false)
// var isActive = true;

var age=19;
if(age){
age>=18 ? console.log("Can take Licence") : console.log("Can't take Licence");
}

// undefined - tanimsiz.
var userName;
console.log(userName); //undefined
console.log(typeof userName); //undefined

// Null - Degeri yok
var isNull = null;
console.log(isNull); //null
console.log(typeof isNull); //object

// Object - Nesnel
var user = {
    name: "Nazal",
    age: 30,
    isActive: true,
    notes: {
        maths: 90,
        english: 80,
        physics: 95,
    },
    favoriteFruits: ["apple", "orange"],
}
console.log(user);
console.log(typeof user);
console.log(user.name);
console.log(user.age);
console.log(user.notes);
console.log(user.notes.physics);

// Array - Dizi
var fruits = ["apple", "orange", "pinneapple"];
console.log(fruits);
console.log(typeof fruits);
console.log(fruits[0]);
console.log(fruits[fruits.length - 1]);
console.log(fruits.length);

// function - Fonksiyonlar
function hello(){
    console.log("Hi JavaScript!");
}
hello();
console.log(hello);
console.log(typeof hello);

// Date - Tarih
var date = new Date();
console.log(date);
console.log(typeof date);

var a = 10;
var b = a;
console.log("1- ",a,b);
a =20;
console.log("2- ",a,b);

var a =[10];
var b = a;
console.log("1- ",a,b);
a = [20];
console.log("2- ",a,b);
console.log("3- ",a*b);

var a =[10,20,30,40,50,];
var b = a;
console.log("1- ",a,b);
a[0] = 60;
console.log("2- ",a,b);
a.push(60);
console.log("3- ",a,b);

// Scope - Kapsam
var a =10; //global scope
function scope(){
    var b =20; // function scope
    console.log(a,b);
}
scope();
if (true) {
    let c =30; // block scope
}
{let d =40; // block scope
    }
    console.log(a,b,c,d);