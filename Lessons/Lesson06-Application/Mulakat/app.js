// Suaasha 1aad.
console.log("1- tee loo hor qorayaa 3 daan?"); // one, two, three

console.log("one");
setTimeout(function () {
    console.log("two");
}, 0);
console.log("three");
// Jawaabta waa one kdib three, waxaa oogu danbeeso two.

// Suaasha 2aad.
console.log("2- Jawaabta maxaa waaye?") // undefined waaye
var foo = {n: 1};
var bar = foo;
foo.x = foo = {n: 2};
console.log(foo.x);

// Suaasha 3aad.
var x = 500;
let y, z, p, q;
q = 200;
if (true) {
    q = y = z = p = x;
    document.getElementById("display").innerHTML =
    "x=" + x + " y :" + y + " z :" + z + " p :" + p + " q :" + q;
}
// Jawaabta 3aad waa: x=500 y:500 z:500 p:500 q:500

// Suaasha 4aad.
let c = { greeting: "Arooryo Suuban!"};
let d;

d = c;
c.greeting = "Aroor Wanaagsan!";
console.log(d.greeting);

// Suaasha 5aad.
class Chameleon {
    static colorChange(newColor) {
        this.newColor = newColor;
        return this.newColor;
    }
    constructor({newColor = "green"} = {}) {
        this.newColor = newColor;
    }
}
const freddie = new Chameleon({newColor: "red"});
// console.log(freddie.colorChange("orange")); browserka si uu u gaduudan ayaan comment oga dhigay.
// colorChange method-ka waa static method, Obje ga lagama waci karo.
// freddie.colorChange is not a function ayaa soo baxeyso.

// Suaasha 6aad.
const obj ={
    name: "Magac",
    getName: function() {
        return this.name;
    },
};
const getNameFunction = obj.getName;
const anotherObj = {
    name: "Test",
    getName: obj.getName,
};
console.log(obj.getName());
console.log(getNameFunction());
console.log(anotherObj.getName());
function globalGetname() {
    console.log(this.name) ;
}
globalGetname();
const boundFunction = globalGetname.bind({name: "Tijaabo"});
boundFunction();