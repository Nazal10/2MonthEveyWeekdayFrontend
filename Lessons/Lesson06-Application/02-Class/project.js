const form = document.getElementById("film-form");
const titleElement = document.getElementById("title");
const directorElement = document.getElementById("director");
const urlElement = document.getElementById("url");
const cardBody = document.querySelectorAll(".card-body")[1];
const clear = document.getElementById("clear-films");

eventListeners();
function eventListeners() {
    form.addEventListener("submit", addFilm);
    document.addEventListener("DOMContentLoaded", loadAllFilms);
    cardBody.addEventListener("click", deleteFilm);
    clear.addEventListener("click", clearAllFilms);
}

function addFilm(e) {
    e.preventDefault();
    const title = titleElement.value;
    const director = directorElement.value;
    const url = urlElement.value;
    
    if (title === "" || director === "" || url === "") {
        // Qalad haday u geliyaan message kaan baa muuqanaya.
        UI.displayMessage("Fadlan, Buuxi 3da saddar ee kore..", "danger");
    } else {
        // Film cusub si ay u geliyaan kan ba shaqeenaayo.
        const newFilm = new Film(title, director, url);
        UI.addFilmToUI(newFilm); // film ku darid front line ka.
        Storage.addFilmToStorage(newFilm); // film ku darid local storage ka.

        // Marku saxo gelinta filmka, Message ka u muuqanaayo
        UI.displayMessage("Filmka waad ku dartay", "success");
        UI.clearInputs(titleElement, directorElement, urlElement); // Tirtirida input yada.
    }
    UI.clearInputs(titleElement, directorElement, urlElement);
    
}

function loadAllFilms(){
    let films = Storage.getFilmsFromStorage();
    UI.loadAllFilmsFromUI(films);
}

function deleteFilm(e) {
    if (e.target.id === "delete-film") {
        UI.deleteFilmFromUI(e.target);
        Storage.deleteFilmFromStorage(
            e.target.parentElement.previousElementSibling.previousElementSibling
            .textContent
        );
        UI.displayMessage("Film ka waala tirey...", "success");
    }
}

function clearAllFilms() {
    if (confirm("Mahubta?")) {
        UI.clearAllFilmsFromUI();
        Storage.clearAllFilmsFromStorage();
        UI.displayMessage("Waa la tirtiray Film yadii oo dhan...", "success");
    }
}