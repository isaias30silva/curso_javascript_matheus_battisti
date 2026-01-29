//if
var idade = 16;
var idadeMinima = 18;

console.log("Antes do if");

if(idade > idadeMinima) {
    console.log("pode fazer a carteira de habilitação");
}

if(idade > 15) {
    console.log("Precisa esperar 3 anos ainda");
}

console.log("Depois do if");

//else if
var nome = "Matheus";

if(nome == "Pedro") {
    console.log("O nome é Pedro");
} else if(nome == "Matheus") {
    console.log("O nome é Matheus");
} else {
    console.log("Ele possui outro nome");
}