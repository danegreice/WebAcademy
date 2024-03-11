const http = require("http");
require("dotenv").config()

const PORT = process.env.PORT ?? 9999

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    res.write("Web Academy");
    res.end();
})

server.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
})