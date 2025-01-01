class Storage {
    static addFilmStore(newFilm) {
        let film = this.getFilmsFromStore();
        film.push(newFilm);
        localStorage.setItem("films", JSON.stringify(film));
    }

    static getFilmsFromStore() {
        let films;
        if (localStorage.getItem("films") ===null) {
            films = [];
        } else {
            films = JSON.parse(localStorage.getItem("films"));
        }
        return films;
    }

    static deleteFilmFromStore(filmTitle) {
        let films = this.getFilmsFromStore();
        films.forEach(function(film, index) {
            if (film.title === filmTitle) {
                films.splice(index, 1);
            }
        });
        localStorage.setItem("films",  JSON.stringify(films));
    }

    static clearAllFilmsFromStorage() {
        localStorage.removeItem("films");
    }
}
