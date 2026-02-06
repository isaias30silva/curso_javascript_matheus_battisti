//criando array
var lista = ["Uva", "Pera", "Maçã", "Banana"];

//criando um elemento lista no html via dom
var listUl = document.createElement('ul');

//inserindo o elemento criado na tag body
var body = document.getElementsByTagName('body');
body[0].appendChild(listUl);

//inserindo os itens da lista dentro da tag criada
var listaNoBody = document.getElementsByTagName('ul');

for(var i = 0; i < lista.length; i++) {

    var liFor = document.createElement('li');

    var textoLi = document.createTextNode(lista[i]);

    liFor.appendChild(textoLi);

    listaNoBody[0].appendChild(liFor);
}