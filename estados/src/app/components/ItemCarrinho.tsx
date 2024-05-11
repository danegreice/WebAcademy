interface IItemCarrinho {
  item: ItemCarrinho;
  removerItemDoCarrinho: (id: string) => void;
}

export default function ItemCarrinho({
  item,
  removerItemDoCarrinho,
}: IItemCarrinho) {
  const valorTotalProduto = (
    precoUnitario: number,
    quantidade: number
  ): number => precoUnitario * quantidade;

  return (
    <tr key={item.id}>
      <td>{item.nome}</td>
      <td>R$ {item.preco.toFixed(2)}</td>
      <td>
        <button className="btn btn-secondary btn-sm me-2">-</button>
        {item.quantidade}
        <button className="btn btn-secondary btn-sm ms-2">+</button>
      </td>
      <td>R$ {valorTotalProduto(item.preco, item.quantidade).toFixed(2)}</td>
      <td>
        <button
          className="btn btn-danger btn-sm"
          onClick={() => removerItemDoCarrinho(item.id)}
        >
          Remover
        </button>
      </td>
    </tr>
  );
}
