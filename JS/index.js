//var n1 = Number(prompt('Digite um número: '))
//var n2 = Number(prompt('Digite o segundo número: '))
//var s = n1 + n2

//alert(`O resultado da soma é ${s} `)


/*TEMPLATE STRING
PLACEHOLDER = $

Ex: ${"nome do var"} puxa VAR




*/

/* DESAFIO PARA SEGUNDA-FEIRA DIA 20/06 

Construi escada de asteristicos

Função criação asteristicos max 100*/

/*TEMPLATE STRING
PLACEHOLDER = $

Ex: ${"nome do var"} puxa VAR
*/

/*----------------- EVENTO DE CLIQUE CONTADOR -----------------*/
const objMark = document.getElementsByTagName('mark')[0]
let contador = 0


function contar() {
    contador = contador + 1
    //ou contador++    
    objMark.innerHTML = contador
}

function zerar(index) {
    contador = 0
    objMark.innerHTML = contador    
}

function exibirPiramide(linhas) {
    let padrao = '';

    for (let linha = 1; linha <= linhas; linha++) {
        padrao += '*';
        console.log(padrao);
    }
}

function piramide() {
    exibirPiramide(contador)
}



