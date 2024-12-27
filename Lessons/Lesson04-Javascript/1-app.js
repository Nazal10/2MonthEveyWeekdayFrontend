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
// scope();
// if (true) {
//     let c =30; // block scope let yerine var olsaydi gorurduk
// }
// {let d =40; // block scope let yerine var olsaydi gorurduk
//     }
//     console.log(a,b,c,d);

    // Type conversions  = Tip Dönüşümleri
    var a = 5;
    console.log(a,typeof a);
    a = String(a);
    console.log(a,typeof a);

    var b = "10";
    console.log(b,typeof b);
    b = Number(b);
    console.log(b,typeof b);

    var c = "tijaabo";
    console.log(c,typeof c);
    c = Number(c);
    console.log(c,typeof c); // NaN 'number'

    var n = 5 + "4";
    console.log("n= ",n,typeof n);

    var m = 5 - "2";
    console.log("m= ",m,typeof m);
    
    // Opeators = Operatörler
    // Assignment operator = atama operatörü ())=
    // const a = 10; const waxii la siiyo dib looma badali karo

    // Arithmetic operators = aritmatik operatörleri
    console.log(10+1); //isku dar
    console.log(10-1); // kala jar
    console.log(10*2); // ku dhufasho
    console.log(10/2); // qeyb
    console.log(10 % 3); // mod, haraaga la qaadanaa,  Mod Alma
    console.log(10 ** 2); // tirada hore waxaa la dul saarayaa tirada danbe, yacni 10*10 ayay noqone, Üs Alma

    // Mathematic functions = Math Fonksiyonları
    let jawab;
    jawab = Math.PI;     console.log("jawaabta PI= ",jawab);
    jawab = Math.round(3.6);      console.log("jawaabta Round= ",jawab);
    jawab = Math.round(3.3);      console.log("jawaabta Round 2= ",jawab);
    jawab = Math.ceil(3.2);      console.log("jawaabta ceil= ",jawab);
    jawab = Math.floor(3.9);      console.log("jawaabta floor= ",jawab);
    jawab = Math.sqrt(25);      console.log("jawaabta squareka= ",jawab);
    jawab = Math.floor(Math.random() * 100);  console.log("jawaabta Random= ",jawab);
    jawab = Math.ceil(Math.random() * 100);  console.log("jawaabta Random 2= ",jawab);

    // String Methods = String Methodları
    let values;

const FirstName= "Sade";
const LastName= "Nur";
const department= "Software";
const Age= 25;

value = FirstName + " " + LastName;
value = FirstName;
value += " " + LastName;
value = FirstName.length;
value = FirstName.toUpperCase;
value = FirstName.toLocaleLowerCase;
value = FirstName[0];
value = FirstName[FirstName.length - 1];
value = FirstName.indexOf("a");
value = FirstName.includes("a");
value = FirstName.concat(" ", LastName, " - ", "Software", " - ", Age)

value = "Magaca= " +FirstName+ ", \nMagaca Qoyska= "+LastName+ ", \nDa'da= "+ Age+ ", \nQeybta Shaqada= "+ department;

console.log(value);

// Template Literals
value = `Magaca: ${FirstName}
MagacaQoyska: ${LastName}
Da'da: ${Age}
Qeybta Shaqada: ${department}`
console.log(value);

// HTMl olarak
value = `
<ul> 
    <li>Magaca: ${FirstName} </li>
    <li>MagacaQoyska: ${LastName} </li>
    <li>Da'da: ${Age} </li>
    <li>Qeybta Shaqada: ${department}
    </ul>`;

    console.log(value);

    // Array Methods = Array Methodlari.

    const luuqadahs = ["Python", "JavaScript", "Java", "C++"];
    const numbarada = [43, 55, 63, 76, 90, 89, 38];

    qiimaha = numbarada.length;  // Eleman sayısı syler
    qiimaha = numbarada[0]; // ilk eleman verir
    qiimaha = numbarada[numbarada.length - 1]; // son eleman verir
    qiimaha = numbarada.indexOf(12); // elemanin indexi veriir
    qiimaha = numbarada.includes(76); // elemanin varligi sorar
    qiimaha = numbarada.includes(12); // var mi yok mu sorar
    qiimaha = numbarada.push(200); // dizinin sonunda eleman ekler
    qiimaha = numbarada.unshift(150); // dizinin basina eleman ekler
    qiimaha = numbarada.pop();  // dizinin sonundan eleman cikarir
    qiimaha = numbarada.reverse(); // diziiyi ters cevirir
    qiimaha = numbarada.sort(); //  alphapetic diziyi siralar
    qiimaha = numbarada.sort(function(a,b) {
        return a-b;
    }) // kucukten  buyuge siraliyor

    console.log("Numberada= ",numbarada); 
    console.log("Qiimaha= ",qiimaha);
    
    // Object
    const Arday ={
        fullName: "Zekerie Salah",
        age:20,
        address: {
            city:"Ankara",
            country:"Turkey",
        },
        luuqadaha: ["Python", "Java", "JavaScript"],
        shaqada: function(){
            console.log("Wuu Shaqeeyaa...");
            return "Wuu Shaqeeyaa...";
        },
    };

    value = Arday;
    value = Arday.fullName;
    value = Arday.address.city;
    value =Arday.luuqadaha[0];
    value = Arday.shaqada();
        
    console.log(value);

    // Date = Taariiq

// let date = new Date();
// value = date;
// value = date.getMonth() + 1; // Ay
// value = date.getDate(); // Gün
// value = date.getDay(); // Haftanın günü
// value = date.getFullYear(); // Yıl
// value = date.getHours(); // Saat
// value = date.getMinutes(); // Dakika
// value = `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`; // Tarih
// 
// console.log(value);

// Comparation = Karsilastirma

a = 10;
b = 20;
c = "10";
d = 10;

value = a == c; // Mala egtahay  Eşit mi?
value = a===c; // Qaabka iyo tirada ba ma is le egyahiin.  Tip ve değer eşit mi?
value = a != b; // ma is la eko sooma ahan  Eşit değil mi?
value = a !== c;  // qaabka iyo tirada isma le eko sooma ahan.  Tip ve değer eşit değil mi?
value = a > b; // maka weyn tahay  Büyük mü?
value = a < b;  // maka yar tahay  Küçük mü?
value = a >= b; // maka weyn tahay ama le egtahay  Büyük eşit mi?
value = a <= b; // maka yar tahay ama le egtah küçük eşit?
console.log(value);

// && (and) Operator/ Operatörü
value = a == d && a < b;
console.log(value);

// || (Or) Operatörü
value = a == b || b < a;
console.log(value);

// Conditions - Koşullar

let y = 10;
let x = 20;

if (y > x) {
    value = `${y} wey ka weyn tahay ${x}`;
} else if (y == b) {
    value = `${y} wey le egtahay ${x}`;
} else {
    value = `${y} wey ka yar tahay ${x}`;
}
console.log(value);

// swith 
const habka = 3;

switch (habka) {
    case 1:
        value = "Habka 1aad";
        break;
    case 2:
        value = "Habka 2aad";
        break;
    case 3:
        value = "Habka 3aad";
        break;
    case 4:
        value = "Habka 4aad";
        break;
    default:
        value = "Hab aan jirin";
        break;
}
console.log(value);

// Loops = Döngüler
// For Döngüsü

for ( let i = 0; i < 10; i++ ) {
    if (i == 5) {
        //break; // jooji, ila ilaa 4 ayuu qoraya 5 iyo inta ka danbeso ma qorayo.
        continue // sii wad, 5 wuu ka boodayaa inta kale ayuu qoraya
    }
    console.log(i);
}

const luuqadaha2 = ["Python", "JavaScript", "Java", "C++"];

for (let index = 0; index < luuqadaha2.length; index++){
    console.log(luuqadaha2[index]);
}

// Function - Fonksiyonlar

