import { render, API } from "./utils.js";

const view = (id = 0) => {                                      // se non gli passiamo un id lui caricherà sempre il primo della lista
    console.log(id);

    fetch(`${API}/${id}`)
        .then(response => response.json())
        .then(movie => {
            const container = document.querySelector("#container");
            render(container,
                `<article>
                <h2>${movie.title}</2>
                <p>${movie.year}</p>
                <img id="resize" src="${movie.poster}" />
                <p>${movie.description}</p>
                <hr />
                <a href="#" id="back">Torna alla home</a>
            </article>`
            );
        });
};

export { view };