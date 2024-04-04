import {create} from "./functions";

type lembrete = [number, string, string, string];
let id: number = 0;

document.querySelector("#btnSalvar")!.addEventListener("click", (e) => {
    //e.preventDefault();

    let titulo = document.querySelectorAll<HTMLInputElement>("#titulo");
    let dataLimite = document.querySelectorAll<HTMLInputElement>("#dataLimite");
    let mensagem = document.querySelectorAll<HTMLInputElement>("#msg");
    
    let lembrete: lembrete = [id++, titulo[0].value, dataLimite[0].value, mensagem[0].value];

    console.log(create(lembrete));

    
})

document.querySelector("#editar")?.addEventListener("click", (e) => {
    console.log(e);
})

