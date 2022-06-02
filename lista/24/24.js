// 24) Faça um algoritmo que pergunte a distância que um passageiro deseja 
// percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para 
// viagens até 200Km e R$0.45 para viagens mais longas.

const prompt = require('prompt-sync')({})

const lerDistanciaPercorrida = () => {
    let perguntaDistancia = parseFloat(prompt("Qual a distância deseja percorrer em Km. :"))
    let preco = perguntaDistancia <= 200 
        ? perguntaDistancia * 0.50 
        : perguntaDistancia * 0.45
    // if (perguntaDistancia <= 200) {
    //     preco = perguntaDistancia * 0.50
    // } else {   
    //     preco = perguntaDistancia * 0.45
    // }
    console.log ("Preço a pagar R$", preco)
}
lerDistanciaPercorrida();