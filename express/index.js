//Importando o express
const express = require("express");

//Iniciando o express e passando para APP
const app = express();

//Rotas
app.get("/", function(requisicao, resposta){
    resposta.send("Bem vindo!");
});

app.get("/blog2", function(requisicao, resposta){
    resposta.send("Blog");
});

//Rota com Query Paramns
app.get("/canal/youtube", function(requisicao, resposta){
    var canal = requisicao.query["canal"];

    if(canal){
        resposta.send(canal);
    }else{
        resposta.send("Nenhum canal fornecido!");
    }
});

//Rota com parametro obrigatório
app.get("/ola/:nome/:empresa", function(requisicao, resposta){
    //Req => Dados enviados pelo usuário
    //Res => Resposta que vai ser enviada para o usuário
    var nome = requisicao.params.nome;
    var empresa = requisicao.params.empresa;

    resposta.send("<h1>Oi " + nome + " do(a) " + empresa + " </h1>");
});

//Rota com parametro NÃO obrigatório
app.get("/blog/:artigo?", function(requisicao, resposta){
    var artigo = requisicao.params.artigo;

    if(artigo){
        resposta.send("<h2>Artigo: " + artigo + " </h2>");
    }else{
        resposta.send("<h3>Bem vindo ao blog!</h3>");
    }
});

//Criação do servidor
app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor iniciado");
    }
});

