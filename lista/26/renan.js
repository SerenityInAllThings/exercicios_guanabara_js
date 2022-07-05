// 26) Escreva um algoritmo que leia dois números inteiros e compare-os, mostrando
// na tela uma das mensagens abaixo:
//  - O primeiro valor é o maior
//  - O segundo valor é o maior
//  - Não existe valor maior, os dois são iguais

const prompt = require("prompt-sync")({})

const compararNum = () => {
    let valor1 = parseInt(prompt("Digite o primeiro valor.\n"))
    let valor2 = parseInt(prompt("Digite o segundo valor.\n"))
    if (valor1 > valor2) {
        console.log("O primeiro valor é o maior.")
    } else if (valor2 > valor1) {
        console.log("O segundo valor é o maior.")
    } else console.log("Não existe valormaior, os dois são iguais.")
}
compararNum()
