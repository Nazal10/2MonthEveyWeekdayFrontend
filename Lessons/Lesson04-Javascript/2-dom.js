let value;

value = document;
value = document.URL;
value = document.title;
value = document.location;
value = document.location.hostname;
value = document.scripts;
value = document.scripts[0];
value = document.links;
value = document.links[document.links.length - 1].getAttribute("class");
value = document.links[document.links.length - 1].classList


// ID ile element secme
value = document.getElementById("title");
value = document.getElementById("title").textContent;
value = document.getElementById("title").innerHTML

// Class ile element secme
value = document.getElementsByClassName("text");
value = document.getElementsByClassName("text")[0];

// Tag ile element secme
value - document.getElementsByTagName("p");

// Query ile element secme
value - document.querySelector("#title");
value = document.querySelector(".text");
value = document.querySelector("span");

// Eleman olusturma
const badhanCusub2 = document.createElement("a");
badhanCusub2.id = "BadhanTijaabo";
badhanCusub2.className = "btn btn-danger";
badhanCusub2.href = "http://www.google.com";
badhanCusub2.target = "_blank";
badhanCusub2.textContent = "Google aad";

// const testDiv = document.querySelector("#DivTijaabo");
// testDiv.appendChild(badhanCusub2);

// value = document.getElementById("BadhanTijaabo");

// value.addEventListener("click", function () {
//     console.log("Hawshii riixida waala sameeyay");
// });

console.log(value);


const textInput = document.querySelector("#text-input");
textInput.addEventListener("keyup", () => console.log(textInput.value));
textInput.addEventListener("focus", () => (textInput.value = ""));
textInput.addEventListener("blur", () => console.log("Waad ka baxday"));
