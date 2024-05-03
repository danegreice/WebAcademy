"use client";
import React from "react";
import ResumoCarrinho from "./components/ResumoCarrinho";
import ListagemProdutos from "./components/ListagemProdutos";
import { mockItensCarrinho } from "./mocks/itensCarrinho";

export default function Produtos() {
  return (
    <>
      <main>
        <div className="container p-5">
          <ResumoCarrinho />
          <ListagemProdutos />
        </div>
      </main>
    </>
  );
}
