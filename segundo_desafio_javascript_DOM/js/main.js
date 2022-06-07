// No desafio desta aula você irá criar uma função anônima que retorne a frase “Fui clicado”. 
// Esta função será aplicada em conjunto de um evento de clique.

const botao = document.querySelector('#calcular')
botao.addEventListener("click", (evento) => {
    console.log(`Fui clicado ${evento}`);
})

// CORREÇÃO DO EXERCÍCIO 

const elemento = document.querySelector("#calcular");
const resultado = document.querySelector(".resultado");

elemento.addEventListener("click", (evento) => {
  resultado.innerHTML = "Fui clicado"
})