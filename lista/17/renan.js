// 17) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse
// 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba
// o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida.

const prompt = require("prompt-sync")({})

const aplicadorMulta = () => {
    let velocidadeVeiculo = parseFloat(prompt("Digite a velocidade do carro em km:"))
    let valorMulta
    if (velocidadeVeiculo > 80) valorMulta = (velocidadeVeiculo - 80) * 5
    console.log(valorMulta)
}
aplicadorMulta()
