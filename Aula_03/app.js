//SERVIDOR HTTP

//Carregando o módulo http do nodejs
const http = require("http");
const hostname = '127.0.0.1';
const port = 3000 ;

//Carregando a porta em que o servidor JS vai funcionar
const server = http.createServer((requisicao, resposta) => {
    resposta.statusCode = 200;
    resposta.end("<h1>Servidor RESPONDENDO</h1>");
});

server.listen(port, hostname, () => {
    console.log('Servidor rodando');
});

