// 16) [DESAFIO] Escreva um programa para calcular a redução do tempo de vida de um
// fumante. Pergunte a quantidade de cigarros fumados por dias e quantos anos ele
// já fumou. Considere que um fumante perde 10 min de vida a cada cigarro. Calcule
// quantos dias de vida um fumante perderá e exiba o total em dias.
// Escrever lógicas em funções
// Usar sintaxe de arrow function

const prompt = require('prompt-sync')({})

const contarCigarrosFumados = () => {
    let cigarrosFumados = parseInt(prompt("Digite o número de cigarros fumados:"))
    cigarrosFumados = cigarrosFumados*10/60/24
    console.log(cigarrosFumados)
}
contarCigarrosFumados();