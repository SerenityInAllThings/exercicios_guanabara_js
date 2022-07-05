// 49) Crie um programa que leia 6 números inteiros e no final
// mostre quantos deles são pares e quantos são ímpares.

const prompt = require("prompt-sync")({})

const leitorInteiros = () => {
    const num1 = parseInt(prompt("Digite primeiro número."))
    const num2 = parseInt(prompt("Digite segundo número."))
    const num3 = parseInt(prompt("Digite terceiro número."))
    const num4 = parseInt(prompt("Digite quarto número."))
    const num5 = parseInt(prompt("Digite quinto número."))
    const num6 = parseInt(prompt("Digite sexto número."))
    let numerosPares = 0
    let numerosImpares = 0
    if (num1 % 2 == 0) {
        numerosPares += 1
    } else {
        numerosImpares += 1
    }
    if (num2 % 2 == 0) {
        numerosPares += 1
    } else {
        numerosImpares += 1
    }
    if (num3 % 2 == 0) {
        numerosPares += 1
    } else {
        numerosImpares += 1
    }
    if (num4 % 2 == 0) {
        numerosPares += 1
    } else {
        numerosImpares += 1
    }
    if (num5 % 2 == 0) {
        numerosPares += 1
    } else {
        numerosImpares += 1
    }
    if (num6 % 2 == 0) {
        numerosPares += 1
    } else {
        numerosImpares += 1
    }
    console.log("Você digitou", numerosPares, "números pares e", numerosImpares, "números ímpares.")
}

leitorInteiros()
