// 46) Crie um programa que calcule e mostre na tela o resultado da soma entre 6 +
// 8 + 10 + 12 + 14 + ... + 98 + 100.

const prompt = require('prompt-sync')({})

const mostrarSoma = () => {
    let index = 6
    let soma = 0
    while(index<100){
        soma += index
        index+=2                
        console.log(soma)        
    }
}
mostrarSoma()