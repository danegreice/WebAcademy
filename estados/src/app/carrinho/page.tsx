"use client";
import React, { useEffect, useReducer } from "react";
import ResumoCarrinho from "../components/ResumoCarrinho";
import ListagemCarrinho from "../components/ListagemCarrinho";
import { mockItensCarrinho } from "../mocks/itensCarrinho";

export default function Carrinho() {
  const [itens, setItens] = React.useState<ItemCarrinho[]>(mockItensCarrinho);
  //const [itens, dispatch] = useReducer(reducer, mockItensCarrinho);

  function reducer(state: State, action: Action): State {
    switch (action.type) {
      case "aumentar_qtd":
        const index = state.itens.findIndex((item) => item.id === action.id);
        state.itens[index].quantidade += 1;
        return { ...state, itens: state.itens };
      case "diminuir_qtd":
        const ind = state.itens.findIndex((item) => item.id === action.id);
        state.itens[ind].quantidade -= 1;
        return { ...state, itens: state.itens };
      case "remover":
      default:
        throw new Error();
    }
  }

  const totalValor = (itens: ItemCarrinho[]) => {
    let valor = 0;
    itens.map((item) => {
      valor += item.preco * item.quantidade;
    });
    return valor;
  };

  const removerItemDoCarrinho = (id: string) => {
    const index = itens.findIndex((item) => item.id === id);
    itens.splice(index, 1);
    setItens(itens);
    console.log(itens);

    //VER O QUE ESTÁ ACONTECENDO AQUI
  };
  return (
    <>
      <main>
        <div className="container p-5">
          <ListagemCarrinho
            itens={itens}
            removerItemDoCarrinho={removerItemDoCarrinho}
          />
          <ResumoCarrinho
            totalItens={itens.length}
            totalValor={totalValor(itens)}
          />
        </div>
      </main>
    </>
  );
}
