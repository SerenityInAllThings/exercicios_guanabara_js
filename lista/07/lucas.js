// 7) Crie um algoritmo que leia um número real e mostre na tela o seu dobro e a
// sua terça parte.
// Ex:
// Digite um número: 3.5
// O dobro de 3.5 é 7.0
// A terça parte de 3.5 é 1.16666
const prompt = require('prompt-sync')({})

const mostrarNumRealDobroTerc = () => {
    let numero = parseInt(prompt("Digite um número: "))
    console.log ("O dobro de",numero,"é",numero*2, "a terça parte de",numero,"é",numero/3)
}
mostrarNumRealDobroTerc();


// Declaracao antiga da função:
// function nomeDaFuncao() {
// }

// Arrow function:
// const nomeDaFuncao  = () => {
//   // corpo da funcao
// }