//criacao de objeto com método
let pessoa = {
    nome: "Isaias",
    idade: 33,
    falar: function() {
        console.log("olá");
    },
    soma: function(a, b) {
        return a + b;
    }
};

console.log(pessoa.nome);

pessoa.falar();

var soma = pessoa.soma(2,2);

console.log(soma);