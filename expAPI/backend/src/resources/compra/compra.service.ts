import { Produto, PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const existeProduto = async (
  nome: string,
  ignoreId?: string
): Promise<boolean> => {
  const produto = await prisma.produto.findUnique({ where: { nome } });
  if (!produto) return false;
  if (ignoreId && produto.id === ignoreId) return false;
  return true;
};

export const getProduto = async (nome: string): Promise<Produto> => {
  const produto = await prisma.produto.findUnique({ where: { nome } });
  return produto!;
};
