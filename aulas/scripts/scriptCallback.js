//callback sincrona = chamar uma funcao dentro de outra

function exibir(num) {
    console.log("A operação resultou em: " + num);
}

function soma(a, b, callback) {
    var op = a+b;
    callback(op);
}

function multiplica(a,b, cb) {
    var op = a*b;
    cb(op);
}

soma(2, 5, exibir);
multiplica(3, 9, exibir);

//setTimeout => define um tempo para executar uma função callback, no exemplo, será após 2 segundos
setTimeout(function() {
    
    console.log("testando o setTimeout");
}, 2000);

//setInterval => define um tempo de repetição de uma execução, diferente do setTimeout que executa uma vez
//neste exemplo, o setInterval está configurado para executar a cada 3 segundos
setInterval(function() {

    console.log("teste o setInterval");
}, 3000);

//clearTimeout => interrompe o timer do setTimeout se uma determinada condição for satisfeita
var x = 0;

var myTimer = setTimeout(function() {
    console.log("O x é 0");
}, 1500);

x = 5;

if(x > 0) {
    clearTimeout(myTimer);
    console.log("O x passou de 0");
}

//clearInterval => interrompe o time do setInterval se uma determinada condição for satisfeita
var myInterval = setInterval(function() {
    console.log("Imprimindo interval");
}, 500);

setTimeout(function() {
    console.log("Não precisamos mais repetir");
    clearInterval(myInterval);
}, 1500);