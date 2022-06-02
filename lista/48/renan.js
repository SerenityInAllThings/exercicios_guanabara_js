// 48) Faça um programa que leia 7 números inteiros e no final mostre o somatório
// entre eles.
const prompt = require(`prompt-sync`)({})

const somarInputados = () => {
    let i = 0
    let soma = 0 
    while(i != 7){
    i+=1
    let inputado = parseInt(prompt("Digite o número inteiro para somar."))      
    soma = inputado + soma
    }console.log(soma)
}
somarInputados()

