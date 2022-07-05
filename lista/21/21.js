// 21) Faça um algoritmo que leia um determinado ano e mostre se ele é ou não 
// BISSEXTO.
// Feitas as correções de calendário, definiu-se a nova regra para o cálculo dos anos bissextos:

// De 4 em 4 anos é ano bissexto.
// De 100 em 100 anos não é ano bissexto.
// De 400 em 400 anos é ano bissexto.
// Prevalecem as últimas regras sobre as primeiras.[2]
// Para melhor entender

// São bissextos todos os anos múltiplos de 400, p.ex.: 1600, 2000, 2400, 2800...
// São bissextos todos os múltiplos de 4, exceto se for múltiplo de 100 mas não de 400, p.ex.: 1996, 2000, 2004,
// Não são bissextos todos os demais anos.

const prompt = require('prompt-sync')({})

const lerAno = () => {
    let ano = prompt("Digite um ano: ");
    if (ano % 400 == 0 || (ano % 4 == 0 && ano % 100 != 0)) {
        console.log (ano, "é um ano bissexto.")
    } else {
        console.log (ano, "não é um ano bissexto.")
    }
}
lerAno();