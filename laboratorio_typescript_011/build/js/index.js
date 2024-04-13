"use strict";
var Lembretes = /** @class */ (function () {
    function Lembretes(e) {
        this.list = [];
        this.list = [];
        this.tbody = e;
        this.read();
        this.render();
    }
    Lembretes.prototype.save = function () {
        localStorage.setItem("todo-list", JSON.stringify(this.list));
    };
    Lembretes.prototype.read = function () {
        var list = localStorage.getItem("todo-list");
        if (list) {
            this.list = JSON.parse(list);
        }
    };
    Lembretes.prototype.render = function () {
        var _this = this;
        this.tbody.innerHTML = "";
        this.list.forEach(function (lembrete) {
            var tr = document.createElement("tr");
            var titulo = document.createElement("td");
            var cadastro = document.createElement("td");
            var limite = document.createElement("td");
            var descricao = document.createElement("td");
            var opcoes = document.createElement("td");
            var btnEdit = document.createElement("button");
            var btnDelete = document.createElement("button");
            btnEdit.innerText = "edit";
            btnDelete.innerText = "delete";
            btnDelete.addEventListener("click", function () {
                _this.remove(lembrete);
            });
            btnEdit.addEventListener("click", function () {
                _this.edit(lembrete);
            });
            titulo.innerText = lembrete[0];
            cadastro.innerText = lembrete[1];
            limite.innerText = lembrete[2];
            descricao.innerText = lembrete[3];
            opcoes.appendChild(btnEdit);
            opcoes.appendChild(btnDelete);
            tr.appendChild(titulo);
            tr.appendChild(cadastro);
            tr.appendChild(limite);
            tr.appendChild(descricao);
            tr.appendChild(opcoes);
            _this.tbody.appendChild(tr);
        });
    };
    Lembretes.prototype.add = function (lembrete) {
        this.list.push(lembrete);
        this.save();
        this.render();
    };
    Lembretes.prototype.edit = function (lembrete) {
        var i = this.list.indexOf(lembrete);
        var tituloElement = document.getElementById("titulo");
        var dataCadastroElement = document.getElementById("dataCadastro");
        var dataLimiteElement = document.getElementById("dataLimite");
        var descricaoElement = document.getElementById("descricao");
        var btnEditar = document.getElementById("btn_editar");
        console.log(i);
        tituloElement.value = this.list[i][0];
        dataCadastroElement.value = this.list[i][1];
        dataLimiteElement.value = this.list[i][2];
        descricaoElement.value = this.list[i][3];
        console.log(i);
    };
    Lembretes.prototype.remove = function (lembrete) {
        var i = this.list.indexOf(lembrete);
        if (i >= 0) {
            this.list.splice(i, 1);
            this.save();
            this.render();
            tituloElement.value = "";
            dataCadastroElement.value = "";
            dataLimiteElement.value = "";
            descricaoElement.value = "";
        }
    };
    return Lembretes;
}());
var tituloElement = document.getElementById("titulo");
var dataCadastroElement = document.getElementById("dataCadastro");
var dataLimiteElement = document.getElementById("dataLimite");
var descricaoElement = document.getElementById("descricao");
var btnCadastrar = document.getElementById("btn_cadastrar");
var msg = document.getElementById("alert");
var tbody = document.getElementById("lembretes");
var meusLembretes = new Lembretes(tbody);
btnCadastrar.addEventListener("click", function () {
    var titulo = tituloElement.value;
    var dataCadastro = dataCadastroElement.value;
    var dataLimite = dataLimiteElement.value;
    var descricao = descricaoElement.value;
    var lem = [titulo, dataCadastro, dataLimite, descricao];
    if (lem[0]) {
        if (lem[1]) {
            meusLembretes.add(lem);
            tituloElement.value = "";
            dataCadastroElement.value = "";
            dataLimiteElement.value = "";
            descricaoElement.value = "";
            msg.className = "alert alert-success";
            msg.innerText = "Salvo";
        }
        else {
            msg.className = "alert alert-danger";
            msg.innerText = "Adicione a data de cadastro";
        }
    }
    else {
        msg.className = "alert alert-danger";
        msg.innerText = "Adicione um título";
    }
});
