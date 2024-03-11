const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type": "text/html;charset=utf-8"});
    fs.readdir(process.argv[2], (err, files) => {
        if (err) console.log(err);
        else {
            files.forEach(file => {
                res.write(file);
            })
        }
    })
    res.end();
})

server.listen(5555, () => {
    console.log("Servidor rodando na porta 5555");
    console.log(__dirname)
})