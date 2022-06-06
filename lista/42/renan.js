// 42) Faça um algoritmo que pergunte ao usuário um número inteiro e positivo
// qualquer e mostre uma contagem até esse valor:
// Ex: Digite um valor: 35
// Contagem: 1 2 3 4 5 6 7 ... 33 34 35 Acabou!

const prompt = require("prompt-sync")({})

const contarAteNumInputado = () => {
    let numInputado = parseInt(prompt("Digite um número inteiro e positivo."))
    let index = 0
    while (numInputado != index) {
        index++
        console.log(index)
    }
}
contarAteNumInputado()
