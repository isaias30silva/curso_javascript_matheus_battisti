//criando a funcao com a palavra reservada function
function primeiraFuncao() {

    console.log("Hello World das funções");
}

//invocando a funcao
primeiraFuncao();

//funcao com parametros
function dizerNome(nome) {

    console.log("O nome é: " + nome);
}

dizerNome("Isaias");
dizerNome("Lucius");

//passando uma variável como parametro de funcao
var nomeBancoDados = "João";

dizerNome(nomeBancoDados);

//usando o return na funcao
function soma(a, b) {
    var soma = a + b;
    return soma;
}

var somaUm = soma(2, 5);
console.log(somaUm);

var somaDois = soma(10, 10);
console.log(somaDois);