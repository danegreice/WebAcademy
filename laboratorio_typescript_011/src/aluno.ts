type lembrete = [string, string, string, string]

export class Lembretes {
    list: lembrete[] = [];
    tr: HTMLElement;

    constructor(e: HTMLElement) {
        this.list = [['1', '2', '3', '4'], ['5', '6', '7', '8']];
        this.tr = e;
        this.read();
        this.render();
    }

    save(){
        localStorage.setItem('todo-list', JSON.stringify(this.list));
    }

    read(){
        const list = localStorage.getItem('todo-list');
        if (list){
            this.list = JSON.parse(list);
        }
    }

    render() {
        this.tr.innerHTML = "";
        this.list.forEach(lembrete => {
            const td = document.createElement("td");
            const btn = document.createElement("button");

            btn.innerText = "-";
            btn.addEventListener("click", () => {
                const i = this.list.indexOf(lembrete);
                if (i>=0){
                    this.list.splice(i, 1);
                }
            });
            td.innerText = lembrete.toString();
            td.appendChild(btn);
        });
    }
}