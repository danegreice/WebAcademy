"use client";
import React from "react";
import ResumoCarrinho from "../components/ResumoCarrinho";
import ListagemCarrinho from "../components/ListagemCarrinho";

export default function Carrinho() {
  return (
    <>
      <main>
        <div className="container p-5">
          <ListagemCarrinho />
          <ResumoCarrinho />
        </div>
      </main>
    </>
  );
}
