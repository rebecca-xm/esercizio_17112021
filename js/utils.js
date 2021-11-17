const API = "https://edgemony-backend.herokuapp.com/movies";

/**
 * Render some content withing a container HTML tag
 */
const render = (container, content) => (container.innerHTML = content); // render = wrapper di HTML

export { API, render };