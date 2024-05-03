import { compare } from "bcryptjs";
import { UsuarioDto } from "../usuario/usuario.types";
import { LoginDto } from "./auth.types";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const checkCredencials = async (
  credencials: LoginDto
): Promise<UsuarioDto | null> => {
  const usuario = await prisma.usuario.findUnique({
    where: { email: credencials.email },
  });
  if (!usuario) return null;
  const ok = await compare(credencials.senha, usuario.senha);
  if (!ok) return null;

  return {
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
    tipoUsuarioId: usuario.tipoUsuarioId,
    createdAt: usuario.createdAt,
    updatedAt: usuario.updatedAt,
  };
};
