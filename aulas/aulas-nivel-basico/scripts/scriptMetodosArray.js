//length => retorna a quantidade de elementos no array
var arr = [1, 2, 3, 4, 5];

console.log(arr.length);

//push => adicionar elemento ao fim do array
arr.push(6);
arr.push("qualquer coisa");

console.log(arr);

//pop => remove o ultimo elemento do array
arr.pop();

console.log(arr);

//unshift => adiciona elemento no inicio do array
arr.unshift(0);

console.log(arr);

//shift => remove o primeiro elemento do array
arr.shift();

console.log(arr);

//lenght-1 => acesso ao último elemento do array
console.log(arr[arr.length-1]);

//isArray = verifica se é um array
console.log(Array.isArray(arr));

//splice => usado para adicionar ou remover elementos do meio do array
//primeiro, informa o índice, depois a quantidade de elementos que serão removidos -se for remocao - e depois o novo valor - se for adicao

var arr1 = [1,2,3,4,5];

//no indice 2, quero remover zero elementos e adicionar o valor 99
arr1.splice(2,0,99);

console.log(arr1);

//no índice 4, quero remover 1 valor, ou seja, o valor do indice 4
arr1.splice(4,1);

console.log(arr1);

//indexOf => informa em qual indice um valor esta no array

console.log(arr1.indexOf(99));

//join => transforma os elementos de um array em uma string
var arr2 = ["um", "array", "vira", "string"];

console.log(arr2.join(","));

//reverse => inverte a posicao dos elementos no array: o que está em ultimo será o primeiro, e o primeiro será o último
console.log(arr2.reverse());