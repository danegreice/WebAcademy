interface ItemCarrinho {
  id: string;
  nome: string;
  preco: number;
  quantidade: number;
}

interface Carrinho {
  itensCarrinho: ItemCarrinho[];
}

type Action =
  | { type: "aumentar_qtd"; id: string }
  | { type: "diminuir_qtd"; id: string }
  | { type: "remover"; id: string };

type State = {
  itens: ItemCarrinho[];
};
