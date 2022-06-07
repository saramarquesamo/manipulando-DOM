// const robotron = doument.querySelector('#robotron')

// robotron.addEventListener("click", dizOi)  //adiciona um evento 

// function dizOi() {
//     console.log("Oi");
// }

//const subtrair = document.querySelector('#subtrair')
//const somar = document.querySelector('#somar')
//const braco = document.querySelector('#braco')

// => FUNÇÃO ANÔNIMA
// parseInt - transformar string em numero
//addEventListener - adocionar evento

// somar.addEventListener("click", (evento) => {
//     braco.value = parseInt(braco.value) + 1
// })

// subtrair.addEventListener("click", (evento) => {
//     braco.value = parseInt(braco.value) - 1
// })

//EVENTO CLICK MAIS ORGANIZADO

function manipulaDados (operacao, controle) {

    const peca = controle.querySelector('[data-contador]')

    if(operacao === "-"){
        peca.value = parseInt(peca.value) - 1
    }else{
        peca.value = parseInt(peca.value) + 1 
    }
    
}

// somar.addEventListener("click", () => { manipulaDados("somar")})
// subtrair.addEventListener("click", () => { manipulaDados("subtrair")})

//MANIPULANDO ARRAYS
const controle = document.querySelectorAll('[data-controle]')

//forEach()
//função do array (escutador de eventos) //target = onde o evento aconteceu ;;; textContent = pega o conteúdoconteúdo da tag
controle.forEach( (elemento) => {
    elemento.addEventListener("click", (evento) => {
        manipulaDados(evento.target.dataset.controle, evento.target.parentNode) //parentNode navega no pai do elemento na árvore
        
    } )
})

//DATA ATRIBUT dasaclopando o javascript do html