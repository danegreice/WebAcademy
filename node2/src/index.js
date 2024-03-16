import http from "http";
import fs from "fs";

import  {createLink} from "../utils/index.js";
import dotenv from "dotenv";

dotenv.config({ path: `.env.${process.env.NODE_ENV}`});

const PORT = process.env.PORT ?? 9999

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    fs.readdir(process.argv[2], (err, files) => {
        if (err) console.log(err);
        else {
            if (req.url === "/"){
                files.forEach(file => {
                    res.write(createLink(file));
                })
                res.end();
            } else { 
                fs.readFile(`.${req.url}`, (err, data) => {
                    if (err) console.log(err);
                    else {
                        res.write(`<a href="/"> Voltar </a><br> ${data}`)
                    }
                    res.end();
                })
            }

        }
    })
})

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})