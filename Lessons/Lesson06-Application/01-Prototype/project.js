const form = document.getElementById('film-form');
const titleElement = document.getElementById('title');
const directorElement = document.getElementById('director');
const urlElement =document.getElementById('url');
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById('clear-films');

// UI Object
const ui = new UI();

// Storage Object
const storage = new Storage();

// All Events
eventListeners();
function eventListeners(){
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", loadAllFilms);
    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);

}


function clearAllFilms() {
    if (confirm("Mahubta?")) {
        ui.clearAllFilmsFromUI();
        storage.clearAllFilmsFromStorage();
        ui.displayMessage("Waa la tirtiray Film yadii oo dhan...", "success");
    }
}

function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        ui.deleteFilmFromUI(e.target);
        storage.deleteFilmFromStorage(e.target.parentElement.previousElementSibling.previousElementSibling.textContent);
        ui.displayMessage("Film ka waala tirey...", "success");
}
}

function addFilm(e){
    e.preventDefault();
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    
    if (title === "" || director === "" || url === "") {
        // Qalad haday u geliyaan message kaan baa muuqanaya.
        ui.displayMessage("Fadlan, Buuxi 3da saddar ee kore..", "danger");
    } else {
        // Film cusub si ay u geliyaan kan ba shaqeenaayo.
        const newFilm = new Film(title, director, url);
        ui.addFilmToUI(newFilm); // film ku darid front line ka.
        storage.addFilmToStorage(newFilm); // film ku darid local storage ka.

        // Marku saxo gelinta filmka, Message ka u muuqanaayo
        ui.displayMessage("Filmka waad ku dartay", "success");
        ui.clearInputs(titleElement, directorElement, urlElement); // Tirtirida input yada.
    }
}

function loadAllFilms(){
    let films = storage.getFilmsFromStorage();
    ui.loadAllFilms(films);
}