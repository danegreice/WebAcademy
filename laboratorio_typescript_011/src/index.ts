type lembrete = [string, string, string, string];

class Lembretes {
  list: lembrete[] = [];
  tbody: HTMLElement;

  constructor(e: HTMLElement) {
    this.list = [];
    this.tbody = e;
    this.read();
    this.render();
  }

  save() {
    localStorage.setItem("todo-list", JSON.stringify(this.list));
  }

  read() {
    const list = localStorage.getItem("todo-list");
    if (list) {
      this.list = JSON.parse(list);
    }
  }

  render() {
    this.tbody.innerHTML = "";
    this.list.forEach((lembrete) => {
      const tr = document.createElement("tr");
      const titulo = document.createElement("td");
      const cadastro = document.createElement("td");
      const limite = document.createElement("td");
      const descricao = document.createElement("td");
      const opcoes = document.createElement("td");
      const btnEdit = document.createElement("button");
      const btnDelete = document.createElement("button");

      btnEdit.innerText = "edit";
      btnDelete.innerText = "delete";
      btnDelete.addEventListener("click", () => {
        this.remove(lembrete);
      });

      btnEdit.addEventListener("click", () => {
        this.edit(lembrete);
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
      this.tbody.appendChild(tr);
    });
  }

  add(lembrete: lembrete) {
    this.list.push(lembrete);
    this.save();
    this.render();
  }

  edit(lembrete: lembrete) {
    let i = this.list.indexOf(lembrete);

    const tituloElement = document.getElementById("titulo");
    const dataCadastroElement = document.getElementById("dataCadastro");
    const dataLimiteElement = document.getElementById("dataLimite");
    const descricaoElement = document.getElementById("descricao");
    const btnEditar = document.getElementById("btn_editar");

    console.log(i);

    (<HTMLInputElement>tituloElement).value = this.list[i][0];
    (<HTMLInputElement>dataCadastroElement).value = this.list[i][1];
    (<HTMLInputElement>dataLimiteElement).value = this.list[i][2];
    (<HTMLInputElement>descricaoElement).value = this.list[i][3];

    console.log(i);

    btnEditar!.addEventListener("click", (event) => {
      console.log("passei aqui");
      let indice = this.list.indexOf(lembrete);

      let titulo = (<HTMLInputElement>tituloElement).value;
      let dataCadastro = (<HTMLInputElement>dataCadastroElement).value;
      let dataLimite = (<HTMLInputElement>dataLimiteElement).value;
      let descricao = (<HTMLInputElement>descricaoElement).value;

      let lem: lembrete = [titulo, dataCadastro, dataLimite, descricao];
      console.log(indice);
      console.log(this.list);
      this.list[indice] = lem;
      console.log(this.list);
      this.save();
      this.render();
    });
  }

  remove(lembrete: lembrete) {
    const i = this.list.indexOf(lembrete);
    if (i >= 0) {
      this.list.splice(i, 1);
      this.save();
      this.render();

      (<HTMLInputElement>tituloElement).value = "";
      (<HTMLInputElement>dataCadastroElement).value = "";
      (<HTMLInputElement>dataLimiteElement).value = "";
      (<HTMLInputElement>descricaoElement).value = "";
    }
  }
}

const tituloElement = document.getElementById("titulo");
const dataCadastroElement = document.getElementById("dataCadastro");
const dataLimiteElement = document.getElementById("dataLimite");
const descricaoElement = document.getElementById("descricao");
const btnCadastrar = document.getElementById("btn_cadastrar");
const msg = document.getElementById("alert");

const tbody: HTMLElement = document.getElementById("lembretes")!;

let meusLembretes = new Lembretes(tbody);

btnCadastrar!.addEventListener("click", () => {
  let titulo = (<HTMLInputElement>tituloElement).value;
  let dataCadastro = (<HTMLInputElement>dataCadastroElement).value;
  let dataLimite = (<HTMLInputElement>dataLimiteElement).value;
  let descricao = (<HTMLInputElement>descricaoElement).value;

  let lem: lembrete = [titulo, dataCadastro, dataLimite, descricao];

  if (lem[0]) {
    if (lem[1]) {
      meusLembretes.add(lem);

      (<HTMLInputElement>tituloElement).value = "";
      (<HTMLInputElement>dataCadastroElement).value = "";
      (<HTMLInputElement>dataLimiteElement).value = "";
      (<HTMLInputElement>descricaoElement).value = "";

      msg!.className = "alert alert-success";
      msg!.innerText = "Salvo";
    } else {
      msg!.className = "alert alert-danger";
      msg!.innerText = "Adicione a data de cadastro";
    }
  } else {
    msg!.className = "alert alert-danger";
    msg!.innerText = "Adicione um título";
  }
});
