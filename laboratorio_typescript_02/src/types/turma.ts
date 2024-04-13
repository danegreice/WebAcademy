import { Aluno } from "./aluno";

export class Classe {
  id: number;
  nome: string;
  alunos: Aluno[] = [];

  constructor(id: number, nome: string) {
    this.id = id;
    this.nome = nome;
  }

  getNumAlunos() {
    return this.alunos.length;
  }
  getMediaIdades() {
    if (this.alunos.length) {
      let idades: number = 0;
      this.alunos.forEach((aluno) => {
        idades += parseInt(aluno.idade);
      });

      return idades / this.alunos.length;
    } else {
      return 0;
    }
  }
  getMediaAlturas() {
    if (this.alunos.length) {
      let alturas: number = 0;
      this.alunos.forEach((aluno) => {
        alturas += parseInt(aluno.altura);
      });

      return alturas / this.alunos.length;
    } else {
      return 0;
    }
  }
  getMediaPesos() {
    if (this.alunos.length) {
      let pesos: number = 0;
      this.alunos.forEach((aluno) => {
        pesos += parseInt(aluno.peso);
      });

      return pesos / this.alunos.length;
    } else {
      return 0;
    }
  }
}
