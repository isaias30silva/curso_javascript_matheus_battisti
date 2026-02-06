//length => retorna a quantidade de caracteres de uma string, incluindo espaços em branco

var nome1 = "Ubaldo";
var nome2 = "Maria Vitória";
var nome3 = "Eniac3456";

console.log(nome1.length);
console.log(nome2.length);
console.log(nome3.length);

//indexOf => retorna o caractere de um determinado indice em uma string
console.log(nome1[2]); //qual o caractere no índice 2
console.log(nome2.indexOf("Vitória")); //a partir de qual indice inicia o texto Vitória

//lastIndexOf => mostra em qual indice a ultima palavra pesquisada inicia
var ultimaPalavra = "a palavra agora apareceu uma vez e agora apareceu de novo o agora";

console.log(ultimaPalavra.lastIndexOf("agora")); //o ultimo agora comeca no indice 60

//slice => vai remover uma parte da string, delimitando os indices de inicio e do fim do trecho desejado
var nome4 = "patota"; //vou fatiar a parte tota, ou seja, do indice 2 ao 6, sempre adicionando 1 ao fim para nao fatiar o ultimo caractere;

console.log(nome4.slice(2, 6));

//replace => substitui um texto ou parte da string por outro
var frase1 = "A vida é difícil, mas nos traz boas recompensas";

console.log(frase1.replace("difícil", "desafiadora")); //substituindo o trecho dificil por desafiadora

//toLowerCase e toUpperCase => transformam o texto em letras minusculas ou maiusculas
var frase1 = "um pato andou por aqui";

var fraseUpperCase = frase1.toUpperCase();
console.log("Em maiusculo: " + fraseUpperCase);

var fraseLowerCase = fraseUpperCase.toLowerCase();
console.log("Em minusculo: " + fraseLowerCase);

//trim => remove espaços em braco entre as strings
var nomeUlisses = "            Ulisses     ";

var nomeUlissesTrim = nomeUlisses.trim();

console.log(nomeUlisses);
console.log(nomeUlissesTrim);

//split => separa os textos de uma string e constroi um array com os trechos separados
var cursos = "PHP JavaScript Python HTML";

console.log(cursos.split(" ")); //passo o " " pois os textos estao separados em espaços na string

