import { TV } from "./tv";
import { Celular } from "./celular";
import { Bicicleta } from "./bicicleta";

export class CarrinhoCompras {
  produtos: (TV | Celular | Bicicleta)[] = [];

  async add<T>(produto: T) {
    await fetch(`${process.env.URL_DB}/produtos`, {
      method: "POST",
      body: JSON.stringify(produto),
    });
  }
}
