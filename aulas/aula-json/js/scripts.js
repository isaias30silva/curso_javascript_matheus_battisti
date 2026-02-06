const objs = [
    {
    nome: 'Matheus', 
    idade: 30,
    esta_trabalhando: true,
    detalhes_profissao: {
        profissao: 'Programador',
        empresa: 'Empresa X',
    },
    hobbies: ["Programar", "Correr", "Ler"],
},
    {
    nome: 'João', 
    idade: 25,
    esta_trabalhando: false,
    detalhes_profissao: {
        profissao: null,
        empresa: null,
    },
    hobbies: ["Jogar", "Academia"],
},
]

//convertendo objeto em json
const jsonData = JSON.stringify(objs);

console.log(jsonData);
console.log(typeof jsonData); //o tipo de um json será string

//convertendo json em objeto
const objData = JSON.parse(jsonData);

console.log(objData);
console.log(typeof objData); //o tipo convertido seja objeto

//usando o map para mapear os valores do objeto
objData.map((pessoa) => {
    console.log(pessoa.nome, pessoa.idade);
})