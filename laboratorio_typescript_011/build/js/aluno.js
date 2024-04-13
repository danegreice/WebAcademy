var Lembretes = /** @class */ (function () {
    function Lembretes(e) {
        this.list = [];
        this.list = [['1', '2', '3', '4'], ['5', '6', '7', '8']];
        this.tr = e;
        this.read();
        this.render();
    }
    Lembretes.prototype.save = function () {
        localStorage.setItem('todo-list', JSON.stringify(this.list));
    };
    Lembretes.prototype.read = function () {
        var list = localStorage.getItem('todo-list');
        if (list) {
            this.list = JSON.parse(list);
        }
    };
    Lembretes.prototype.render = function () {
        var _this = this;
        this.tr.innerHTML = "";
        this.list.forEach(function (lembrete) {
            var td = document.createElement("td");
            var btn = document.createElement("button");
            btn.innerText = "-";
            btn.addEventListener("click", function () {
                var i = _this.list.indexOf(lembrete);
                if (i >= 0) {
                    _this.list.splice(i, 1);
                }
            });
            td.innerText = lembrete.toString();
            td.appendChild(btn);
        });
    };
    return Lembretes;
}());
export { Lembretes };
