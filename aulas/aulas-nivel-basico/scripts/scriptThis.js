//criacao de objeto com método
let pessoa = {
    nome: "Isaias",
    idade: 33,
    falar: function() {
        console.log("olá");
    },
    dizerNome: function() {
        console.log("o nome é " + this.nome);
    },
    aniversario: function() {
        this.idade += 1;
    }
};

pessoa.dizerNome();

console.log(pessoa.idade);

pessoa.aniversario();
pessoa.aniversario();
pessoa.aniversario();

console.log(pessoa.idade);

