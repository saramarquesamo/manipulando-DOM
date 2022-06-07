// Você irá criar um botão que, ao ser clicado, faz aparecer esta lista, 
// e também criará um segundo botão que, ao ser clicado, faz com que a lista de cores 
//volte a sumir.
const lista = document.querySelector('.lista')

document.querySelector('#mostrar').addEventListener('click', () => {
     lista.hidden = false
     })

document.querySelector('#ocultar').addEventListener('click', () => {
     lista.hidden = true
     })