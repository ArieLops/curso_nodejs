//Importando o express
const express = require("express");

//Iniciando o express e passando para APP
const app = express();

//Rotas
app.get("/", function(requisicao, resposta){
    resposta.send("Bem vindo!");
});

app.get("/blog", function(requisicao, resposta){
    resposta.send("Blog");
});

app.get("/canal/youtube", function(requisicao, resposta){
    resposta.send("Canal Youtube");
});

//Criação do servidor
app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor iniciado");
    }
});

