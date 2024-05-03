import swaggerAutogen from "swagger-autogen";
import dotenv from "dotenv";
dotenv.config();
const doc = {
  info: {
    title: "API da Loja virtual",
    description: "Documentação da API",
  },
  definitions: {
    CreateProdutoDto: {
      nome: "Martelo",
      preco: 29.0,
      estoque: 10,
    },
    Produto: {
      id: "8a2053de-5d92-4c43-97c0-c9b2b0d56703",
      nome: "Bacon",
      preco: 261,
      estoque: 1,
      createdAt: "2023-11-07T19:27:15.645Z",
      updatedAt: "2023-11-07T19:27:15.645Z",
    },
    CreateUsuarioDto: {
      nome: "Marcelo Silva",
      email: "marcelo@gmail.com",
      senha: "123456",
    },
    UpdateUsuarioDto: {
      nome: "Marcelo Silva",
      email: "marcelo@gmail.com",
      senha: "123456",
    },
    Usuario: {
      id: "272330ce-0000-4c62-ab42-9cec262021d7",
      nome: "Anne",
      email: "anne@gmail.com",
      senha: "$2a$10$cOANGx.hYHZXXXp2nhtpMetqoO0vFJsmfXOiPkktY7664pYl/ZWEu",
      tipoUsuarioId: "9b0c3957-8731-4ab2-a654-8276f427b683",
      createdAt: "2024-05-01T19:30:42.442Z",
      updatedAt: "2024-05-01T19:30:42.442Z",
    },
    UsuarioDto: {
      id: "272330ce-0000-4c62-ab42-9cec262021d7",
      nome: "Anne",
      email: "anne@gmail.com",
      tipoUsuarioId: "9b0c3957-8731-4ab2-a654-8276f427b683",
      createdAt: "2024-05-01T19:30:42.442Z",
      updatedAt: "2024-05-01T19:30:42.442Z",
    },
    Usuarios: [
      {
        id: "272330ce-0000-4c62-ab42-9cec262021d7",
        nome: "Anne",
        email: "anne@gmail.com",
        senha: "$2a$10$cOANGx.hYHZXXXp2nhtpMetqoO0vFJsmfXOiPkktY7664pYl/ZWEu",
        tipoUsuarioId: "9b0c3957-8731-4ab2-a654-8276f427b683",
        createdAt: "2024-05-01T19:30:42.442Z",
        updatedAt: "2024-05-01T19:30:42.442Z",
      },
      {
        id: "272330ce-0000-4c62-ab42-9cec262021d7",
        nome: "Daniele",
        email: "daniele@gmail.com",
        senha: "$2a$10$cOANGx.hYHZXXXp2nhtpMetqoO0vFJsmfXOiPkktY7664pYl/ZWEu",
        tipoUsuarioId: "9b0c3957-8731-4ab2-a654-8276f427b683",
        createdAt: "2024-05-01T19:30:42.442Z",
        updatedAt: "2024-05-01T19:30:42.442Z",
      },
    ],
    Produtos: [
      {
        id: "8a2053de-5d92-4c43-97c0-c9b2b0d56703",
        nome: "Bacon",
        preco: 261,
        estoque: 1,
        createdAt: "2023-11-07T19:27:15.645Z",
        updatedAt: "2023-11-07T19:27:15.645Z",
      },
      {
        id: "8a2053de-5d92-4c43-97c0-c9b2b0d56703",
        nome: "Maçã",
        preco: 24,
        estoque: 1 - 5,
        createdAt: "2023-11-07T19:27:15.645Z",
        updatedAt: "2023-11-07T19:27:15.645Z",
      },
    ],
    id: "8a2053de-5d92-4c43-97c0-c9b2b0d56703",
    linguagem: {
      lang: "pt-BR",
    },
    tipoUsuario: "admin",
    Credenciais: {
      email: "dani@gmail.com",
      senha: "123456",
    },
    ProdutoCarrinho: {
      nome: "Maçã",
    },
  },
  host: `${process.env.HOST}:${process.env.PORT}`,
};
const outputFile = "./swagger-output.json";
const routes = ["./src/router/index.ts"];
swaggerAutogen()(outputFile, routes, doc);
