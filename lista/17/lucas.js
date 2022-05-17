// 17) Escreva um programa que pergunte a velocidade de um carro. Caso ultrapasse 
// 80Km/h, exiba uma mensagem dizendo que o usuário foi multado. Nesse caso, exiba 
// o valor da multa, cobrando R$5 por cada Km acima da velocidade permitida. "subtrair até chegar 80km"

const prompt = require('prompt-sync')({})

const askCarro = () => {
    let carSpeed = parseFloat(prompt("Qual era a velocidade do carro? "))
    if (carSpeed > 80) {
        let valorMulta = (carSpeed - 80) * 5
        console.log ("Parabéns seu corno, você ultrapassou os 80Km/h e foi multado! O valor da multa é igual a R$" + valorMulta)  

    }
    
}
askCarro()