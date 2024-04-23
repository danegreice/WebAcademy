import express from "express";
import dotenv from "dotenv";
import { ReasonPhrases, StatusCodes } from "http-status-codes";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
const PORT = process.env.PORT ?? 4444;

const prisma = new PrismaClient();

app.use(express.json());
app.get("/cliente", async (req, res) => {
  try {
    const clientes = await prisma.cliente.findMany();
    res.status(StatusCodes.OK).json(clientes);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
});
app.post("/cliente", async (req, res) => {
  const cliente = req.body;
  try {
    const novoCliente = await prisma.cliente.create({ data: cliente });
    res.status(StatusCodes.CREATED).json(novoCliente);
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
});
app.put("/cliente/:id", async (req, res) => {
  const { id } = req.params;
  const cliente = req.body;
  try {
    const updatedCliente = await prisma.cliente.update({
      data: cliente,
      where: { cpf: id },
    });
    res.status(StatusCodes.NO_CONTENT).json();
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
});
app.delete("/cliente/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const deletedCliente = await prisma.cliente.delete({ where: { cpf: id } });
    res.status(StatusCodes.NO_CONTENT).json();
  } catch (err) {
    res.status(StatusCodes.INTERNAL_SERVER_ERROR).json(err);
  }
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
