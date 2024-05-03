import { tipoUsuarios } from "../src/resources/tipoUsuario/tipoUsuario.constants";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const seed = async () => {
  await prisma.tipoUsuario.createMany({
    data: [
      { id: tipoUsuarios.ADMIN, rotulo: "admin" },
      { id: tipoUsuarios.CLIENT, rotulo: "client" },
    ],
    skipDuplicates: true,
  });
};

seed()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
  });
