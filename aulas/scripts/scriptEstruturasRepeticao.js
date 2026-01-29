//while => estrutura de repetição mais simples do JavaScript. Vai repetir algo até atingir uma determinada condição
var x = 0;

while(x < 5) {
    console.log("Este é o número " + x);

    //incrementador
    x++;
}

var arr = ["teste", "testando", "a", "b"];
var y = 0;

while(y <= 3) {
    console.log(arr[y]);

    //incrementador
    y++;
}

var nome = "Isaias";
var i = 0;

while(i <=5) {
    console.log(nome[i]);

    //incrementador
    i++;
}

//for => sintaxe mais complexa, a instrução fica toda em uma linha
//estrutura do for: variavel, condição, incremento
for(var j = 0; j < 10; j++) {

    console.log("Repetindo for: " + j);
}

var arr = [1, 2, 3, 4];

for(var k = 0; k < arr.length; k++) {
    console.log(arr[k]);
}

//break e continue => break - para encerrar uma instrução, continue - para pular uma instrução
//no exemplo abaixo, o break vai parar no número 5
for(var i = 10; i > 0; i--) {

    console.log(i);

    if(i === 5) {
        break;
    }
}

//no exemplo abaixo, o continue vai pular os numeros 60 e 90
var x = 10;

while(x < 100) {

    x += 10;

    if(x === 60 || x === 90) {
        console.log("CONTINUE");
        continue;
    }

    console.log("Testando continue " + x);
}