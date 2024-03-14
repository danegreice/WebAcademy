import http from "http";
import dotenv from "dotenv";
import { createParagrafos } from "./utils/index.js";

dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const PORT = process.env.PORT ?? 9999

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
    let html = `<div>
    <h4> GERADOR DE LOREM IPSUM!</h4><br>
    <label for="qtd">Parágrafos</label>
    <input type="number" name="qtd" id="qtd" min="1" style="width: 5em;"><br>
    
    </div>`
    res.write(html);
    res.end();
})

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})