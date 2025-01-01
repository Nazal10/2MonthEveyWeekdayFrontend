class UI {
    static addFilmToUI (newFilm) {
        const filmList = document.getElementById("films");
        filmList.innerHTML += `
        <tr>
            <td class="w-25"><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
            <td class="w-25">${newFilm.title}</td>
            <td class="w-25">${newFilm.director}</td>
            <td class="w-25"><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
            </tr>
        `;
    }

    static clearInputs(element1, element2, element3) {
        element1.value = "";
        element2.value = "";
        element3.value = "";
    }

    static displayMessage(message, type) {
        const carBody = document.querySelector(".card-body");
        const div = document.createElement("div");
        div.className = `alert alert-${type}`;
        div.textContent = message;
        carBody.appendChild(div);
        setTimeout(function () {
            div.remove();
        }, 2500);
    }

    static clearAllFilmsFromUI() {
        const filList = document.getElementById("films");
        while (filList.firstElementChild !== null) {
            filList.firstElementChild.remove();
        }
    }

    static loadAllFilmsFromUI(films) {
        const filmList = document.getElementById("films");
        films.forEach(function (film) {
            filmList.innerHTML += `
            <tr>
                <td class="w-25"><img src="${newFilm.url}" class="img-fluid img-thumbnail"></td>
                <td class="w-25">${newFilm.title}</td>
                <td class="w-25">${newFilm.director}</td>
                <td class="w-25"><a href="#" id="delete-film" class="btn btn-danger">Filmi Sil</a></td>
            </tr>
            `;
        });
    }
}
