// 3) Crie um programa que leia o nome e o salário de um funcionário, mostrando no
// final uma mensagem.
// Ex:
// Nome do Funcionário: Maria do Carmo
// Salário: 1850,45
// O funcionário Maria do Carmo tem um salário de R$1850,45 em Junho.
const prompt = require ('prompt-sync')({})

const mostrarSalario = () => {
    let nome = prompt ("Qual o seu nome?: ")
    let salario = prompt ("Qual seu salário?: R$")
    console.log ("O Funcinário", nome, "teve um salário de", salario, "em Junho.")
}

mostrarSalario()