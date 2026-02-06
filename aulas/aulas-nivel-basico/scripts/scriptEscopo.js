//declarando variavel global
var x = 10;
var y = 12;

//o acesso às variaveis é aberto 
console.log(x, y);

//declarando variavel de escopo local, dentro de funcao
function teste() {

    //aqui é declarada a variavel que só é acessivel dentro da funcao
    var z = 14;
    
     //o acesso à variavel será permitido pois ela está dentro da funcao
     console.log(z)

     //assim como o acesso de variaveis globais dentro de funcoes
     console.log("variaveis globais: " + x, y);
}

teste();

//porem, ao tentar acessar a variavel de escopo fora da funcao, apresentará erro
//console.log(z);

//os nomes das variaveis de escopo local podem ser repetidos para outras variaveis de escopo local
function teste2() {

    //z é o mesmo nome da variavel de escopo local da funcao teste
    var z = 15;
    console.log("valor da variavel z da funcao teste2: " + z);
}

teste2();