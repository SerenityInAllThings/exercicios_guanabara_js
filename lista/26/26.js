// 26) Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando 
// na tela uma das mensagens abaixo:
//  - O primeiro valor é o maior
//  - O segundo valor é o maior
//  - Não existe valor maior, os dois são iguais

const prompt = require('prompt-sync')({})

const compararNumInteiro = () => {
    let numeroUm = parseInt(prompt("Digite um número inteiro: "))
    let numeroDois = parseInt(prompt("Digite outro número inteiro: "))
    if (numeroUm > numeroDois) {
        console.log ("o primeiro número:",numeroUm,"é o maior")
    } else if (numeroDois > numeroUm) {
        console.log ("o segundo número:",numeroDois,"é o maior")
    } else if (numeroUm === numeroDois) {
        console.log ("Ambos os números ",numeroUm, "e",numeroDois,"são iguais");
    } else {
        console.log('Lemos valores estranhos', numeroUm, numeroDois)
    }
}
compararNumInteiro();
