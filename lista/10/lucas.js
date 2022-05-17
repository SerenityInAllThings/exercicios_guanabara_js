// 10) Faça um algoritmo que leia a largura e altura de uma parede, calcule e
// mostre a área a ser pintada e a quantidade de tinta necessária para o serviço,
// sabendo que cada litro de tinta pinta uma área de 2metros quadrados.
const prompt = require('prompt-sync')({})

const dimensões = () => {
    let largura = prompt ("Qual a largura de sua parede: ")    
    let altura = prompt("e sua altura: ")    
    let mQuadrado = largura*altura
    console.log ("Para pintar a área total serão necessários "+mQuadrado/2+" litros de tinta")
}

dimensões()