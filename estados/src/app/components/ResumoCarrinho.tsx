interface IResumoCarrinho {
  totalItens: number;
  totalValor: number;
}

export default function ResumoCarrinho({
  totalItens,
  totalValor,
}: IResumoCarrinho) {
  return (
    <div className="card mb-4">
      <div className="card-body">
        <h5 className="card-title mb-4 fw-light">Resumo do Carrinho</h5>
        <p className="card-text fw-medium">Quantidade total: {totalItens}</p>
        <p className="card-text fw-medium">Valor total: R${totalValor}</p>
      </div>
    </div>
  );
}
