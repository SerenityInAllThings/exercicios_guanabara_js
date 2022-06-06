// 18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade
// dela e depois mostre se ela pode ou não votar.
const prompt = require("prompt-sync")({})

const calcularIdade = () => {
    let anoNascimento = parseInt(prompt("Digite o ano de nascimento."))
    let idadeEleitor = 16
    let dataAtual = new Date()
    let anoAtual = dataAtual.getFullYear()
    let idadeVotar = anoAtual - anoNascimento
    console.log(idadeVotar)
    if (idadeVotar >= idadeEleitor) console.log("Você pode votar.")
}
calcularIdade()
