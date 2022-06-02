// 29) Desenvolva um programa que leia o nome de um funcionário, seu salário, 
// quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de 
// acordo com a tabela a seguir:
//  - Até 3 anos de empresa: aumento de 3%
//  - entre 3 e 10 anos: aumento de 12.5%
//  - 10 anos ou mais: aumento de 20%

const prompt = require('prompt-sync')({})
// ajustarSalarialNome
const ajusteSalarialNome = () => {
    let nome = prompt("Digite o nome do funcionario: ")
    let salario = parseFloat(prompt("Digite salário atual: R$"))
    let anos = parseInt(prompt("Digite quantos anos ele possuiu como COLABORADOR: "))
    if (anos < 3) {
        console.log ("O salário do COLABORADOR",nome,"foi reajustado para:R$",salario+(salario*0.03))
    } else if (anos > 3 && anos < 10) {
        console.log ("O salário do COLABORADOR",nome,"foi reajustado para:R$",salario+(salario*0.125))
    } else {
        console.log ("O salário do COLABORADOR",nome,"foi reajustado para:R$",salario+(salario*0.20))
    }

}
ajusteSalarialNome();
