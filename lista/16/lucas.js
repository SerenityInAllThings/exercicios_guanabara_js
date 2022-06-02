// 16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um 
// fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele 
// já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule 
// quantos dias de vida um fumante perderá e exiba o total em dias.
const prompt = require('prompt-sync') ({})

const calcularVidaFumante = () => {
    let cigarro = parseInt(prompt("Olá, quantos cigarros por dia o Sr(a) fuma? : "))
    const ano = parseInt(prompt("A quantos ano o Sr(a) é fumante? : "))
    cigarro = (cigarro * 365 * ano * 10) / 60 / 24
    cigarro = parseInt(cigarro)
    console.log ("Você já perdeu",cigarro,"dias de vida.")
}
calcularVidaFumante();

// se 60min = 1 hora
// 