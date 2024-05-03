import { genSalt, hash } from "bcryptjs";
import {
  CreateUsuarioDto,
  UsuarioDto,
  TipoUsuario,
  UpdateUsuarioDto,
} from "./usuario.types";
import { PrismaClient, Usuario } from "@prisma/client";
import { TiposUsuarios } from "../tipoUsuario/tipoUsuario.constants";

const prisma = new PrismaClient();

export const createUsuario = async (
  usuario: CreateUsuarioDto,
  tipoUsuario: TipoUsuario
): Promise<UsuarioDto> => {
  const rounds = parseInt(process.env.BCRYPT_ROUNDS!);
  const salt = await genSalt(rounds);
  const senha = await hash(usuario.senha, salt);
  return await prisma.usuario.create({
    select: {
      id: true,
      nome: true,
      email: true,
      tipoUsuarioId: true,
      createdAt: true,
      updatedAt: true,
    },
    data: {
      ...usuario,
      senha,
      tipoUsuarioId:
        tipoUsuario === "admin" ? TiposUsuarios.ADMIN : TiposUsuarios.CLIENT,
    },
  });
};

export const listUsers = async (): Promise<Usuario[]> => {
  return await prisma.usuario.findMany({});
};

export const readUser = async (id: string): Promise<Usuario | null> => {
  return await prisma.usuario.findUnique({ where: { id } });
};

export const checkEmail = async (
  email: string,
  ignoreId?: string
): Promise<boolean> => {
  const usuario = await prisma.usuario.findUnique({ where: { email } });
  if (!usuario) return true;
  if (ignoreId && usuario.id === ignoreId) return true;
  return false;
};

export const updateUser = async (
  id: string,
  usuario: UpdateUsuarioDto
): Promise<Usuario> => {
  return await prisma.usuario.update({ data: usuario, where: { id } });
};

export const deleteUser = async (id: string): Promise<Usuario> => {
  return await prisma.usuario.delete({ where: { id } });
};
