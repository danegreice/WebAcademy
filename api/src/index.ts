import expresss, { Request, Response } from "express";
import dotenv from "dotenv";
import validateEnv from "./utils/validateEnv";
import router from "./router";
import cookieParser from "cookie-parser";

dotenv.config();
validateEnv();

const app = expresss();
const PORT = process.env.PORT ?? 4444;

app.use(cookieParser());
app.use(expresss.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
