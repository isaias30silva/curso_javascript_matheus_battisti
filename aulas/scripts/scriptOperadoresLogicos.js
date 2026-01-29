//&& => AND, retorna true apenas se as duas expressões retornarem true
var idade = 16;
var nome = "João";

if(nome === "João" && idade === 16) {
    console.log("João pode entrar na aula de esgrima");
} else {
    console.log("Este não é João");
}

if(1 === 1 && 2 === '2') {
    console.log("São tipos number");
} else {
    console.log("Algum valor não é tipo number");
}

//|| => OR, retorna true caso uma das operações retornar true e false apenas se as duas expressões forem falsas
var idade = 11;
var nome = "Pedro";

if(idade > 12 || nome === "João") {
    console.log("Pode entrar");
} else {
    console.log("Não pode entrar");
}

//! => muda o valor que a expressão retornou: se recebeu true vira false, se recebeu false vira true
if(!false) {
    console.log("Passou");
}

var nome = "Matheus";

if(!(nome === "Pedro")) {
    console.log("O nome é Matheus");
}