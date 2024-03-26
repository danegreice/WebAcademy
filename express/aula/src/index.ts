import express from "express";
import dotenv from "dotenv";
import envalidEnv from "./utils/envalid"

dotenv.config();
envalidEnv();

const app = express();
const PORT = process.env.PORT ?? 3334

app.use((req, res, next) => {
    console.log(`Requisição ${req.method}: ${req.url}`);
    next();
})

app.use(express.json());

app.use((req, res, next) => {
    const {login, senha} = req.body;
    if (login === "eduarda" && senha === "123456"){
        next();
    } else {
        res.status(401).send({msg: "Usuário não encontrado"});
    }
})

app.get("/", (req, res) => {
    res.send("Hello world");
})

app.listen(PORT, () => {
    console.log(`App iniciada na porta ${PORT}`);
})

