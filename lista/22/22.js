// 22) Escreva um programa que leia o ano de nascimento de um rapaz e mostre a sua 
// situação em relação ao alistamento militar.
//  - Se estiver antes dos 18 anos, mostre em quantos anos faltam para o 
// alistamento.
//  - Se já tiver depois dos 18 anos, mostre quantos anos já se passaram do 
// alistamento.

const prompt = require('prompt-sync')({})

const lerIdadeMilitar = () => {
    let idade = parseInt(prompt("Qual a sua idade rapaz? "))
    if (idade < 18) {
        let idadeMenor = 18 - idade
        console.log ("Faltam mais",idadeMenor,"anos para o alistamento militar.")
    } else {
        let idadeMaior = idade - 18
        console.log ("Você já perdeu",idadeMaior,"anos para o alistamento militar, procure uma junta imediatamente!")
    }
}
lerIdadeMilitar();