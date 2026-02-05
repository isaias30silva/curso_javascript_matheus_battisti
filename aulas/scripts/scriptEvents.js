//onload = evento ativado ao carregar a página
window.onload = function() {

    console.log("Carregou o DOM");
}

//evento click
var btn = document.getElementById("btn");

btn.addEventListener("click", function() {

    console.log("clicou");

    console.log(this);

    this.style.color = "red";
})

var title = document.getElementById("title");

title.addEventListener("click", function() {

    console.log("clicou no title");

    var subtitle = document.getElementById("subtitle");

    subtitle.style.display = "none";
})

//double click
var subtitle = document.getElementById("subtitle");

subtitle.addEventListener("dblclick", function() {

    console.log("duplo click");
})

//mouseover
var title1 = document.getElementById("title");

title1.addEventListener("mouseover", function() {

    this.style.color = "white";
    this.style.backgroundColor = "green";
})

//mouseout
var title2 = document.getElementById("title");

title2.addEventListener("mouseout", function() {

    this.style.color = "black";
    this.style.backgroundColor = "white";
})

//keydown => quando uma tecla é acionada no teclado
document.addEventListener("keydown", function(event) {

    if(event.key === "Enter") {
        console.log("Apertou enter");
    }

})

//keyup => quando uma tecla é despressionada no teclado
document.addEventListener("keyup", function(event) {

    if(event.key === "Enter") {
        console.log("Soltou o enter");
    }
})