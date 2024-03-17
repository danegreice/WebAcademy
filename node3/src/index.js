import http from "http";
import dotenv from "dotenv";
import { readFile } from "fs";
import { createParagrafos } from "../utils/index.js";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const PORT = process.env.PORT ?? 9999;

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8"});
    readFile("./src/home.html", (err, data) => {
        if (err) console.log(err);
        res.write(data.toString().replace("{{lorem}}", createParagrafos(parseInt(req.url.split("=")[1]))));
        res.end();
    })


})

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})