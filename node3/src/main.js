const {createParagrafos} = require("./../utils/index.js")

console.log("OIIIIII")
let button = document.getElementById("button");
let qtd = document.getElementById("qtd");
let elemento = document.createElement("p");
let div = document.getElementById("container")

button.addEventListener("click", () => {
    console.log(qtd)
    for(let i = 0; i< qtd.value; i++) {
        let p = createParagrafos(1);
        elemento.appendChild(p);
        div.appendChild(elemento);
    }

})