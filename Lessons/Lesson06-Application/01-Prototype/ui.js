function UI () {}

UI.prototype.addBookToList = function (newFilm) {
    const filmlist = document.getElementById("films");
    filmlist.innerHTML += `
    <tr>
    <td class="w-25"><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
    <td class="w-25">${newFilm.title}</td>
    <td class="w-25">${newFilm.director}</td>
    <td class="w-25"><a href="#" id="delete-film" class="btn btn-danger">Delete Film</a></td>
    </tr>
    `;
};

UI.prototype.clearInputs = function (element1, element2, element3) {
    element1.value = "";
    element2.value = "";
    element3.value = "";
};

UI.prototype.loadAllFilms = function (films) {
    const filmlist = document.getElementById("films");
    films.forEach(film => {
        filmlist.innerHTML += `
        <tr>
        <td class="w-25"><img src="${film.url}" class="img-fluid img-thumbnail"></td>
        <td class="w-25">${film.title}</td>
        <td class="w-25">${film.director}</td>
        <td class="w-25"><a href="#" id="delete-film" class="btn btn-danger">Delete Film</a></td>
        </tr>
        `;
    });
};

UI.prototype.deleteFilmFromUI = function (element) {
    element.parentElement.parentElement.remove();
};

UI.prototype.clearAllFilmsFromUI = function () {
    const filmlist = document.getElementById("films");
    while (filmlist.firstElementChild !== null) {
        filmlist.firstElementChild.remove();
    }
};

UI.prototype.displayMessage = function (message, type) {
    const cardBody = document.querySelector(".card-body");
    const div = document.createElement("div");
    div.className = `alert alert-${type}`;
    div.textContent = message;
    cardBody.appendChild(div);
    setTimeout(function () {
        div.remove();
    }, 1000);
};