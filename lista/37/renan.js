// 37) Uma empresa precisa reajustar o salário dos seus funcionários, dando um
// aumento de acordo com alguns fatores. Faça um programa que leia o salário atual,
// o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa.
// No final, mostre o seu novo salário, baseado na tabela a seguir:
// - Mulheres
//  - menos de 15 anos de empresa: +5%
//  - de 15 até 20 anos de empresa: +12%
//  - mais de 20 anos de empresa: +23%
// - Homens
//  - menos de 20 anos de empresa: +3%
//  - de 20 até 30 anos de empresa: +13%
//  - mais de 30 anos de empresa: +25%

const prompt = require("prompt-sync")({})

const reajustarSalario = () => {
    let salarioAtual = parseFloat(prompt("Digite aqui o seu salário atual."))
    const gênero = prompt(
        "Dentre as alternativas, ser macho ou ser fêmea, diga-nos qual seu gênero. "
    ).toString()
    const anosServiço = parseInt(prompt("Há quantos anos você trabalha na empresa?"))
    if (gênero == "macho") {
        if (anosServiço < 20) {
            salarioAtual *= 1.03
            console.log("Seu salário foi reajustado para: ", salarioAtual)
        } else if (anosServiço >= 20 && anosServiço <= 30) {
            salarioAtual *= 1.13
            console.log("Seu salário foi reajustado para: ", salarioAtual)
        } else if (anosServiço > 30) {
            salarioAtual *= 1.25
            console.log("Seu salário foi reajustado para: ", salarioAtual)
        }
    } else if (gênero == "fêmea") {
        if (anosServiço < 20) {
            salarioAtual *= 1.03
            console.log("Seu salário foi reajustado para: ", salarioAtual)
        } else if (anosServiço >= 20 && anosServiço <= 30) {
            salarioAtual *= 1.12
            console.log("Seu salário foi reajustado para: ", salarioAtual)
        } else if (anosServiço > 30) {
            salarioAtual *= 1.23
            console.log("Seu salário foi reajustado para: ", salarioAtual)
        }
    } else {
        console.log("Desculpe, este programa aceita somente dois gêneros.")
    }
}
reajustarSalario()
