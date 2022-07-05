const prompt = require('prompt-sync')({})

const lerCarteira = () =>{
    const dinheiro = parseFloat(prompt('Quanto você tem em caixa?'))
    const cotacaoDolar = parseFloat(prompt('Qual a cotação atual do Dolar frente ao Real (R$)?'))

    const dinheiroDolar = dinheiro / cotacaoDolar

    console.log('Você pode comprar $'+dinheiroDolar.toFixed(2),'com esse montante na carteira.')
}
lerCarteira()