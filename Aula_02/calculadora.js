var nome =  "Calculadora V1";

function soma(a,b){
    return a + b;
}

function multiplicacao(a,b){
    return a * b;
}

function subtracao(a,b){
    return a-b;
}

function divisao(a,b){
    return a/b;
}

module.exports = {
    nome,
    soma,
    multiplicacao,
    subtracao,
    divisao
};