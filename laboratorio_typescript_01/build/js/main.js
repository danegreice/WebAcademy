"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const functions_1 = require("./functions");
let id = 0;
document.querySelector("#btnSalvar").addEventListener("click", (e) => {
    //e.preventDefault();
    let titulo = document.querySelectorAll("#titulo");
    let dataLimite = document.querySelectorAll("#dataLimite");
    let mensagem = document.querySelectorAll("#msg");
    let lembrete = [id++, titulo[0].value, dataLimite[0].value, mensagem[0].value];
    console.log((0, functions_1.create)(lembrete));
});
(_a = document.querySelector("#editar")) === null || _a === void 0 ? void 0 : _a.addEventListener("click", (e) => {
    console.log(e);
});
