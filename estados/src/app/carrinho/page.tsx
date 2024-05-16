"use client";
import React, { useEffect, useReducer } from "react";
import ResumoCarrinho from "../components/ResumoCarrinho";
import ListagemCarrinho from "../components/ListagemCarrinho";
import { mockItensCarrinho } from "../mocks/itensCarrinho";

function reducer(state: State, action: Action): State {
  const index = state.itens.findIndex((item) => item.id === action.id);
  switch (action.type) {
    case "aumentar_qtd":
      console.log(state.itens[index].quantidade);
      state.itens[index].quantidade++;
      console.log(state.itens[index].quantidade);
      return { ...state, itens: state.itens };
    case "diminuir_qtd":
      state.itens[index].quantidade--;
      return { ...state, itens: state.itens };
    case "remover":
      console.log("passei aqui");
      return {
        ...state,
        itens: state.itens.filter((item) => item.id !== action.id),
      };
    default:
      throw new Error();
  }
}

export default function Carrinho() {
  const [state, dispatch] = useReducer(reducer, { itens: mockItensCarrinho });

  const totalValor = (itens: ItemCarrinho[]) => {
    let valor = 0;
    itens.map((item) => {
      valor += item.preco * item.quantidade;
    });
    return valor;
  };

  return (
    <>
      <main>
        <div className="container p-5">
          <ListagemCarrinho itens={state.itens} dispatch={dispatch} />
          <ResumoCarrinho
            totalItens={state.itens.length}
            totalValor={totalValor(state.itens)}
          />
        </div>
      </main>
    </>
  );
}
