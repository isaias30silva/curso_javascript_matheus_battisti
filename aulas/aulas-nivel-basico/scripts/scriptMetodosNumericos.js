//parseFloat => transforma string ou número inteiro em numero com ponto flutuante
var numero1 = 5;
var numero2 = '2';

console.log(parseFloat(numero1));
console.log(parseFloat(numero2));

//parseInt => transforma string ou número com ponto fluente em numero inteiro
var numero3 = '6';
var numero4 = 5.6;

console.log(parseInt(numero3));
console.log(parseInt(numero4));

//toFixed => vai limitar a exibição de casas decimais em numeros com ponto flutuante, arredondando os valores
var numero5 = 5.98767;
var numero6 = 9.983322;
var numero7 = 7.6342;

console.log(numero5.toFixed(2)); //limitando em duas casas decimais 
console.log(numero6.toFixed(1)); //limitando em uma casa decimais
console.log(numero7.toFixed(1));

//isNaN => vai retornar true se reconhecer que não é um tipo numero e false se for um numero

var numero8 = 'teste';
var numero9 = 12;
var numero10 = '11';

console.log(isNaN(numero8));
console.log(isNaN(numero9));
console.log(isNaN(numero10));

//MAX_VALUE e MIN_VALUE => são os valores máximos e minimos numericos permitidos no javascript. Exceder esses valores trará como retorno o infinity ou -infinity

console.log(Number.MAX_VALUE); //1.7976931348623157e+308
console.log(Number.MIN_VALUE); //5e-324