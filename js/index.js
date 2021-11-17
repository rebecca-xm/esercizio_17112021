// import { API } from "./utils.js";
import { list } from "./list.js";
import { add } from "./add.js";
import { view } from "./view.js";
import { edit } from "./edit.js";

const loadList = () =>
    fetch("https://edgemony-backend.herokuapp.com/movies")                                  // errore volontario per triggerare l'alert
        .then((response) => {                                                               // ricordati di tornare ad => (API)!!!
            if (response.status === 404) {
                console.error("READ HERE: Could not load remote data, is server on?");      // alert per gli sviluppatori
                document.querySelector(".alert").classList.add("show");                     // alert per l'utente
            } else {
                return response.json();
            }
        })
        .then((data) => list(data));

document.addEventListener("DOMContentLoaded", loadList);

// PROVA #

const getId = () => parseInt(location.hash.split("-")[1]);

window.addEventListener("hashchange", () => {
    // console.log("hash has changed", location.hash);
    const destination = location.hash.split("-")[0];

    switch (destination) {
        case "#add":
            add();
            break;
        case "#view":
            // const id = parseInt(location.hash.split("-")[1])
            view(getId());                                                  // le funzioni vengono risolte dall'interno verso l'esterno
            break;
        case "#edit":
            // const id = parseInt(location.hash.split("-")[1])
            edit(getId());
            break;
        case "":
            loadList();
            break;
    }
});