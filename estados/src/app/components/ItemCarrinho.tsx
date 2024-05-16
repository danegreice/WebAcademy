interface IItemCarrinho {
  item: ItemCarrinho;
  dispatch: React.Dispatch<Action>;
}

export default function ItemCarrinho({ item, dispatch }: IItemCarrinho) {
  const valorTotalProduto = (
    precoUnitario: number,
    quantidade: number
  ): number => precoUnitario * quantidade;

  return (
    <tr key={item.id}>
      <td>{item.nome}</td>
      <td>R$ {item.preco.toFixed(2)}</td>
      <td>
        <button
          className="btn btn-secondary btn-sm me-2"
          onClick={() => dispatch({ type: "diminuir_qtd", id: item.id })}
        >
          -
        </button>
        {item.quantidade}
        <button
          className="btn btn-secondary btn-sm ms-2"
          onClick={() => dispatch({ type: "aumentar_qtd", id: item.id })}
        >
          +
        </button>
      </td>
      <td>R$ {valorTotalProduto(item.preco, item.quantidade).toFixed(2)}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => dispatch({ type: "remover", id: item.id })}
        >
          Remover
        </button>
      </td>
    </tr>
  );
}
