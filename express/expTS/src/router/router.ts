import { Router } from "express";
import createParagrafos from "../utils/paragrafos";

const router = Router();

router.get("/", (req, res) => {
    res.send("hello world");
})

router.post("/", (req, res) => {
    res.send({nome: "Daniele", id: 1});
})

router.get("/bemvindo/:nome", (req, res) => {
    const nome = req.params.nome;
    res.send(`Seja bem vindo ${nome}`);
})

router.get("/lorem/:qtd", (req, res) => {
    const qtd = req.params.qtd;
    res.send(createParagrafos(parseInt(qtd)));
})

export default router;