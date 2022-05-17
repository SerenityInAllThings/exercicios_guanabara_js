// 20) Desenvolva um programa que leia um número inteiro e mostre se ele é PAR ou 
// ÍMPAR.

const prompt = require('prompt-sync')({})

const lerNumInt = () => {
    let numero = parseInt(prompt("Digite um número inteiro: "));
    if (numero%2 === 1) {
        console.log ("ÍMPAR")
    } else {
        console.log ("PAR")
    }
}

lerNumInt();