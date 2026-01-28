//variavel tipo numero inteiro
var numeroInteiro = 5;

console.log(numeroInteiro);
console.log(typeof numeroInteiro);

//variavel tipo numero flutuante
var numeroFlutuante = 5.2;

console.log(numeroFlutuante);
console.log(typeof numeroFlutuante)

//texto com número = se o número estiver entre aspas será interpretado como uma string
var textoComNumero = "456";

console.log(textoComNumero);
console.log(typeof textoComNumero);

//outras representações de números
console.log(typeof NaN);
console.log(typeof +Infinity);
console.log(typeof -Infinity);

//declaracao de variavel tipo string
var nome = "Isaias";

console.log(typeof nome);

var sobrenome = "Silva";

var nomeCompleto = nome + " " + sobrenome;

console.log(nomeCompleto);

//declaracao de variavel tipo boolean
var verdadeiro = true;

console.log(verdadeiro);
console.log(typeof verdadeiro);

//declaracao de variavel tipo null (representa um valor) e undefined (variavel com valor nao atribuido)
var nome1 = null;
var nome2;

console.log(nome1);
console.log(typeof nome1);
console.log(nome2);
console.log(typeof nome2);

//declaracao de variaval tipo objeto - entre chaves
var objeto = {
    nome: "Isaias",
    idade: 33,
    ocupacao: "Estudante"
};

console.log(objeto);
console.log(typeof objeto);

//acessando valores do objeto usando . e []

console.log(objeto.idade);
console.log(objeto.nome);
console.log(objeto["ocupacao"]);

console.log("Meu nome é " + objeto.nome + " " + "eu tenho " + objeto.idade + " anos" + " " + "e minha ocupação atual é " + objeto["ocupacao"] + ".");

//declaracao de arrays
var arr = [
    5, "Isaias", true, {teste:"1", teste:"2"}
];

console.log(arr);
console.log(typeof arr);

//acessando os itens do array, que começa no índice 0
console.log(arr[0]);
console.log(arr[3]);

//adicionando elemento no array na ultima posicao - índice
arr[4] = 8;

console.log(arr);
console.log(arr[4]);

//sobrescrevendo o valor de um elemento do array, passando o índice
arr[0] = 6;

console.log(arr);
console.log(arr[0]);