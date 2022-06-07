// temos uma lista de cores que serão utilizadas para pintar uma loja, 
// porém o cliente informou que não deseja mais pintar com a cor "vermelha". 
// Retire esta cor da lista utilizando um método do JavaScript.


var lista = ["Laranja", "Vermelho", "Branco", "Amarelo", "Rosa"]; 

// let cor = lista.indexOf('Vermelho'); // posição 1
// lista.splice(cor, 1);
// console.log(lista);

//APRIMORANDO CONCEITOS:

let escolhe = prompt(lista + "Qual cor voce desaja excçuir?")
console.log(escolhe);

function selecionaCor(cor) {
    if(cor === "vermelho"){
        let icor = lista.indexOf('Vermelho'); // posição 1
        lista.splice(icor, 1 );
        console.log(lista);
    } else{
        console.log(lista);
    }
}

selecionaCor(escolhe)