// 33) Escreva um programa para aprovar ou não o empréstimo bancário para a compra
// de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e
// em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que
// ela não pode exceder 30% do salário ou então o empréstimo será negado.

const prompt = require("prompt-sync")({})

const aprovadorEmprestimo = () => {
    const valorCasa = parseFloat(prompt("Digue o valor da tua casa.\n"))
    const valorSalario = parseFloat(prompt("Digue o valor do teu salário.\n"))
    const anos = parseInt(prompt("Em quantos anos você paga a casa?"))
    let prestação = valorCasa / (anos * 12)
    if (valorSalario * 0.3 > prestação) {
        console.log("Empréstimo bancário aprovado.")
    } else {
        console.log("Empréstimo bancário negado.")
    }
}
aprovadorEmprestimo()
