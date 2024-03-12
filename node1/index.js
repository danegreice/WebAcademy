const http = require("http");
const fs = require("fs");

const dotenv = require("dotenv");
dotenv.config({ path: `.env.${process.env.NODE_ENV}`});

const PORT = process.env.PORT ?? 9999

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    fs.readdir(process.argv[2], (err, files) => {
        if (err) console.log(err);
        else {
            files.forEach(file => {
                res.write(`${file} <br>`);
            })
            res.end();
        }
    })
})

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})