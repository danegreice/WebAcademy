"use client";
import React from "react";
import ResumoCarrinho from "./components/ResumoCarrinho";
import ListagemProdutos from "./components/ListagemProdutos";

export default function Produtos() {
  const [produtos, setProdutos] = React.useState<Produto[] | null>(null);
  const [totalCompra, setTotalCompra] = React.useState<number>(0);
  const [totalItens, setTotalItens] = React.useState<number>(0);

  const adicionarAoCarrinho = (produto: Produto) => {
    setTotalCompra(totalCompra + parseInt(produto.preco));
    setTotalItens(totalItens + 1);
  };

  React.useEffect(() => {
    fetch("https://ranekapi.origamid.dev/json/api/produto")
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);

  return (
    <>
      <main>
        <div className="container p-5">
          <ResumoCarrinho totalItens={totalItens} totalValor={totalCompra} />
          {produtos ? (
            <ListagemProdutos
              produtos={produtos}
              adicionarAoCarrinho={adicionarAoCarrinho}
            />
          ) : (
            <div className="d-flex justify-content-center">
              <div className="spinner-border" role="status">
                <span className="sr-only"></span>
              </div>
            </div>
          )}
        </div>
      </main>
    </>
  );
}
