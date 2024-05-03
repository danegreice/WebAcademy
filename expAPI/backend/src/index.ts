import expresss, { Request, Response } from "express";
import dotenv from "dotenv";
import validateEnv from "./utils/validateEnv";
import router from "./router";
import cookieParser from "cookie-parser";
import setCookieLang from "./middlewares/setLangCookie";
import { v4 as uuidv4 } from "uuid";
import session = require("express-session");
import swaggerUi from "swagger-ui-express";
import swaggerFile from "./swagger-output.json";
import { Produto } from "@prisma/client";

declare module "express-session" {
  interface SessionData {
    uid: string;
    tipoUsuarioId: string;
    carrinho: Produto[];
  }
}

dotenv.config();
validateEnv();

const app = expresss();
const PORT = process.env.PORT ?? 4444;

app.use(cookieParser());
app.use(
  session({
    genid: () => uuidv4(),
    secret: "Hi9Cf#mK98",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(setCookieLang);
app.use(expresss.json());
app.use("/api", swaggerUi.serve, swaggerUi.setup(swaggerFile));
app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
