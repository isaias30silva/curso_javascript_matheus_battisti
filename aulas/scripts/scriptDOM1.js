//acessando o elemento pela tag
var titulo = document.getElementsByTagName('h1')[0];

console.log(titulo);

var list = document.getElementsByTagName('li');

console.log(list);
console.log(list[3]);

//acessando o elemento pelo id
var paragrafo = document.getElementById('paragrafo');

console.log(paragrafo);

//acessando o elemento pela classe
var itensDaLista = document.getElementsByClassName('item');

console.log(itensDaLista);

//usando querySelectorAll = vai selecionar os elementos identificados por um id, class ou tag especifico - mais de um elemento
var itensQuery = document.querySelectorAll('#lista2 li');

console.log(itensQuery);

var itensQuery2 = document.querySelectorAll('#lista .item');

console.log(itensQuery2);

//usando o querySelector para acessar o primeiro elemento que encontrar com a tag, id ou class - um elemento
var lista2 = document.querySelector('#lista');

console.log(lista2);

//alterando conteudo do html. primeiro seleciona o elemento e depois utiliza o innerHTML ou textContent
var title = document.querySelector('#title');
title.innerHTML = 'Alterando o titulo';

//o textContent é mais usado do que o innerHTML 
var subtitle = document.querySelector('.subtitle');
subtitle.textContent = 'Alterando o subtitulo';

//criando o elemento no body: primeiro, cria o elemento, depois o nó de texto que será apenço ao elemento e depois insere o elemento no html

var novoParagrafo = document.createElement("p");

var texto = document.createTextNode("Este é o conteúdo do parágrafo");

novoParagrafo.appendChild(texto);

var body = document.querySelector("body");

body.appendChild(novoParagrafo);

//criando um elemento em um container
var container = document.getElementById("container");

var el = document.createElement('span');

el.appendChild(document.createTextNode('texto da tag span'));

container.appendChild(el);

//removendo elemento filho => removeChild
var container = document.querySelector("#container");

var p = document.querySelector("#container p");

container.removeChild(p);

//removendo o elemento
var subtitulo = document.querySelector(".subtitle");

subtitulo.remove();

//criando elemento 
var el = document.createElement("div");

//criando classe para o elemento criado
el.classList= "div-criada";

var container = document.querySelector("#container");

container.appendChild(el);

//insertBefore => vai inserir o elemento antes de outro elemento
var el2 = document.createElement("div");

el2.classList = "div-before";

var el3 = document.querySelector("#container .div-criada");

container.insertBefore(el2, el3);

