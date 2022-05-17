// 15) Crie um programa que leia o número de dias trabalhados em um mês e mostre o 
// salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 
// por hora trabalhada.

const prompt = require('prompt-sync')({})

const lerDiasTrabalhados = () =>  {
    let diasTrabalhados = parseInt(prompt("Digite o número de dias trabalhados: "))
    diasTrabalhados = diasTrabalhados*25*8
    console.log("Levando em consideração seus dias trabalhados, seu salário é de: R$ ", diasTrabalhados)
}
lerDiasTrabalhados(); 