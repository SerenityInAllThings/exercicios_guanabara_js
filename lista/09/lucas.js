// 9) Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$)
// e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$3,45.
const prompt = require('prompt-sync')({})

const quantiaDinheiro = () => {
    let reais = parseInt(prompt ("Quantos R$ você tem na carteira: R$"))    
    console.log ("Você poderia comprar U$"+reais/3.45)
}

quantiaDinheiro()
