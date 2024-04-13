export class Aluno {
  id: string;
  nome: string;
  idade: string;
  altura: string;
  peso: string;

  constructor(
    id: string,
    nome: string,
    idade: string,
    altura: string,
    peso: string
  ) {
    this.id = id;
    this.nome = nome;
    this.idade = idade;
    this.altura = altura;
    this.peso = peso;
  }
}
