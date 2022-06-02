// 11) Desenvolva uma lógica que leia os valores de A, B e C de uma equação do
// segundo grau e mostre o valor de Delta.
// delta = b² - 4.a.c
const prompt = require('prompt-sync')({})

const mostrarValorDelta = () => {
    let A = parseInt(prompt("Digite um número: "))
    let B = parseInt(prompt("Digite um número: "))
    let C = parseInt(prompt("Digite um número: "))
    console.log ("Delta = ",(B*B) -(4*A*C))
}
mostrarValorDelta()