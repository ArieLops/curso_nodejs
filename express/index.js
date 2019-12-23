//Importando o express
const express = require("express");

//Iniciando o express e passando para APP
const app = express();

app.listen(4000, function(erro){
    if(erro){
        console.log("Ocorreu um erro");
    }else{
        console.log("Servidor iniciado");
    }
});

