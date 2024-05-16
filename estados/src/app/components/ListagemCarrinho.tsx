import ItemCarrinho from "./ItemCarrinho";

interface IListagemCarrinho {
  itens: ItemCarrinho[];
  dispatch: React.Dispatch<Action>;
}

export default function ListagemCarrinho({
  itens,
  dispatch,
}: IListagemCarrinho) {
  return (
    <div className="card mb-4">
      <div className="row card-body">
        <h5 className="card-title mb-4 fw-light">Produtos selecionados</h5>
        <div className="table-responsive">
          <table className="table ">
            <thead>
              <tr>
                <th>Produto</th>
                <th>Valor Unitário</th>
                <th>Quantidade</th>
                <th>Valor Total</th>
                <th>Opções</th>
              </tr>
            </thead>
            <tbody>
              {itens.map((item) => (
                <ItemCarrinho key={item.id} item={item} dispatch={dispatch} />
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
