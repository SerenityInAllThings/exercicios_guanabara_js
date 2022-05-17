// 14) A locadora de carros precisa da sua ajuda para cobrar seus serviços. Escreva 
// um programa que pergunte a quantidade de Km percorridos por um carro alugado e a 
// quantidade de dias pelos quais ele foi alugado. Calcule o preço total a pagar, 
// sabendo que o carro custa R$90 por dia e R$0,20 por Km rodado.

const prompt = require('prompt-sync')({})

const monstrarPreçoAluguel = () => {
    let km = parseFloat(prompt("Quantos KMs foram percorridos?: "))
    km = km*0.20
    let diaria = parseInt(prompt("Quantos dias o carro foi usado?: "))
    diaria = diaria*90
    console.log (km+diaria)

}
monstrarPreçoAluguel();