// 29) Desenvolva um programa que leia o nome de um funcionário, seu salário,
// quantos anos ele trabalha na empresa e mostre seu novo salário, reajustado de
// acordo com a tabela a seguir:
//  - Até 3 anos de empresa: aumento de 3%
//  - entre 3 e 10 anos: aumento de 12.5%
//  - 10 anos ou mais: aumento de 20%

const prompt = require('prompt-sync')({})

const reajustarSalario = () => {
    const nome = prompt("Digite o seu nome.\n")
    let salario = parseFloat(prompt("Digite o seu salário.\n"))
    const anos = parseInt(prompt("Digite o número de anos trabalhados na empresa.\n"))
    if(anos<3){
        console.log("Seu novo salário é de:"+salario*1.03)
    }else if(anos>=3 && anos<=10){
        console.log("Seu novo salário é de:"+salario*1.125)
    }else{
        console.log("Seu novo salário é de:"+salario*1.2)
    }
}
reajustarSalario()
