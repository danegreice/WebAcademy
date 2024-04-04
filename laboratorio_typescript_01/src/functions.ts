type lembrete = [number, string, string, string];
let lembretes: Array<lembrete> = [];
let id: number = 0;

export function create(lem: lembrete): boolean{

    let linhaLembrete = document.createElement("tr");

    let celulaTitulo = document.createElement("th");
    let celulaDataHora = document.createElement("th");
    let celulaDataLimite = document.createElement("th");
    let celulaMEnsagem = document.createElement("th");
    let celulaOpcoes = document.createElement("th");
    let btnExcluir = document.createElement("button");
    let btnEditar = document.createElement("button");

    btnEditar.textContent = "Editar";
    btnExcluir.textContent = "Excluir";
    btnEditar.className = "editar btn btn-secondary";
    btnExcluir.className = "excluir btn btn-secondary";

    let date: Date =  new Date();

    celulaTitulo.textContent = lem[1]
    celulaDataHora.textContent = ( ("0" + date.getDate()).slice(-2)) + "/" + (("0" + (date.getMonth() + 1)).slice(-2)) + "/" + date.getFullYear() + "-" + date.getHours()+":"+ (("0" + date.getMinutes()).slice(-2));
    celulaDataLimite.textContent = lem[2]
    celulaMEnsagem.textContent = lem[3]

    celulaOpcoes.appendChild(btnEditar);
    celulaOpcoes.appendChild(btnExcluir);

    let table = document.querySelectorAll<HTMLTableElement>("#tabelaLembretes")![0].querySelectorAll<HTMLTableRowElement>("tbody");

    linhaLembrete.appendChild(celulaTitulo);
    linhaLembrete.appendChild(celulaDataHora);
    linhaLembrete.appendChild(celulaDataLimite);
    linhaLembrete.appendChild(celulaMEnsagem);
    linhaLembrete.appendChild(celulaOpcoes);

    table[0].appendChild(linhaLembrete);

    lembretes.push(lem);

    console.log(lembretes);
    
    return true;
}