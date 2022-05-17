// 12) Crie um programa que leia o preço de um produto, calcule e mostre o seu 
// PREÇO PROMOCIONAL, com 5% de desconto.

const prompt = require('prompt-sync')({})

const lerPreços = () => {
   let preço = parseInt(prompt("Digite um preço: ")) 
   console.log ("O PREÇO PROMOCIONAL DO PRODUTO É DE: ", preço*0.95)
}

lerPreços();