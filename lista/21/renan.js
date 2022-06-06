// 21) Faça um algoritmo que leia um determinado ano e mostre se ele é ou não
// BISSEXTO.
const prompt = require("prompt-sync")({})
let anoDigitado = parseInt(prompt("Digite o ano de nascimento."))
let condicao = anoDigitado / 400
let condicao2 = anoDigitado
const calculadorAnoBissexto = () => {
    if (anoDigitado % 400 == 0 || (anoDigitado % 100 == 0 && anoDigitado % 400 != 0)) {
    }
}
