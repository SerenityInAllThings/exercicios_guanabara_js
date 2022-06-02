// 36) Um programa de vida saudável quer dar pontos atividades físicas que podem 
// ser trocados por dinheiro. O sistema funciona assim:
//  - Cada hora de atividade física no mês vale pontos
//  - até 10h de atividade no mês: ganha 2 pontos por hora
//  - de 10h até 20h de atividade no mês: ganha 5 pontos por hora
//  - acima de 20h de atividade no mês: ganha 10 pontos por hora
//  - A cada ponto ganho, o cliente fatura R$0,05 (5 centavos) 
// Faça um programa que leia quantas horas de atividade uma pessoa teve por mês, 
// calcule e mostre quantos pontos ela teve e quanto dinheiro ela conseguiu ganhar.
// import { isString } from './funcoes.js'
const { isString } = require('./funcoes')
const prompt = require('prompt-sync')({})
// let isString = (text) => {
//     if (isNaN(text)) {
//         console.log("Comando inválido, digite apenas números.")
//         return true
//     }
//     return false
// }

const calcularAtividade = () => {
    let pontos
    const dinheiroPorPontos = 0.05
    let resultado
    let resultado2
    // let resultado2 = isString(horas);

    do {
        let horas = parseFloat(prompt("Quantas horas de atividade você faz por dia? : "))
        resultado2 = isString(horas);
        if (!resultado2) {
            if (horas < 10) {
                pontos = horas * 2
                resultado = pontos * dinheiroPorPontos
                console.log("Você fez acumulou o total de :", pontos, "pontos, portanto teve o lucro de : R$", resultado)
            } else if (horas >= 10 && horas < 20) {
                pontos = horas * 5
                resultado = pontos * dinheiroPorPontos
                console.log("Você fez acumulou o total de :", pontos, "pontos, portanto teve o lucro de : R$", resultado)
            } else if (horas > 20) {
                pontos = horas * 10
                resultado = pontos * dinheiroPorPontos
                console.log("Você fez acumulou o total de :", pontos, "pontos, portanto teve o lucro de : R$", resultado)
            }
        } 
    } while (resultado2);




}
calcularAtividade();

// while (resultado2) {
//     let horas = parseFloat(prompt("Quantas horas de atividade você faz por dia? : "))
//     resultado2 = isString(horas)
//     if (!resultado2) {
//         if (horas < 10) {
//             pontos = horas * 2
//             resultado = pontos * dinheiroPorPontos
//             console.log("Você fez acumulou o total de :", pontos, "pontos, portanto teve o lucro de : R$", resultado)
//         } else if (horas >= 10 && horas < 20) {
//             pontos = horas * 5
//             resultado = pontos * dinheiroPorPontos
//             console.log("Você fez acumulou o total de :", pontos, "pontos, portanto teve o lucro de : R$", resultado)
//         } else if (horas > 20) {
//             pontos = horas * 10
//             resultado = pontos * dinheiroPorPontos
//             console.log("Você fez acumulou o total de :", pontos, "pontos, portanto teve o lucro de : R$", resultado)
//         }
//     }

// }
