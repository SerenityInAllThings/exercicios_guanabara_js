// 23) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos
// para todos, mas especialmente para mulheres. Faça um programa que leia nome,
// sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo
// que:
//  - Homens ganham 5% de desconto
//  - Mulheres ganham 13% de desconto

const prompt = require("prompt-sync")({})

const aplicadorDesconto = () => {
    let nome = prompt(`Digite seu nome.\n`).toString()
    let sexo = prompt(`Digite seu sexo.\n`)
    let valorCompras = parseFloat(prompt(`Digite o valor da compra\n`))
    if (sexo.toLowerCase() == "masculino") {
        let desconto = valorCompras * 0.05
        console.log(nome + sexo + (valorCompras - desconto))
    } else {
        let desconto = valorCompras * 0.13
        console.log(nome + sexo + (valorCompras - desconto))
    }
}
aplicadorDesconto()
