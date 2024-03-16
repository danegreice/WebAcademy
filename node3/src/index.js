import http from "http";
import dotenv from "dotenv";
import { readFile } from "fs";
import { types } from "util";
dotenv.config({ path: `.env.${process.env.NODE_ENV}` });

const PORT = process.env.PORT ?? 9999

const server = http.createServer((req, res) => {
    console.log(req.url)

    res.writeHead(200, {"Content-Type": "text" });
    if (req.url === "/style.css"){
        readFile('./src/style.css', (err, data) => {
            if (err) throw err;
            res.write(data);
        })
    }
    if (req.url === "/main.js") {
        readFile('./src/main.js', (err, data) => {
            if (err) throw err;
            res.write(data);
        })
    }
    readFile('./src/home.html', (err, data) => {
        if (err) throw err;
        res.write(data);
        res.end();
    })
})

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})