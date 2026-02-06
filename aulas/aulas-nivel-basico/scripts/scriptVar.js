//declarando variável
var teste = 1;

console.log(teste);

//declarando variável sem o var = não recomendado
nome = "João";

console.log(nome);

//alterando o tipo da variável
teste = "Isaias";

console.log(teste);

//na declaração de variáveis não é permitido iniciar com números e caracteres especiais, com excessão do $ e do _
var $sifrão = "caractere1";
var _underline = "caractere2";
var numero5 = "não inicia com número"

console.log($sifrão);
console.log(_underline);
console.log(numero5);

//cameCase = ao declarar variáveis de nomes compostos, a partir da segunda palavra usar a inicial em maiúscula
var meuPrimeiroNome = "Isaias";
var meuSobrenome = "Silva";

console.log(meuPrimeiroNome + " " + meuSobrenome);

//outras formas de criar variável: let e const
let testando = 1;
const saudacao = "olá";

console.log(testando);
console.log(saudacao);

//é possível criar a variável sem valor inicial, que será undefined
var valor;
console.log(valor);

//e depois atribuir a variável um valor
valor = "nome";
console.log(valor);