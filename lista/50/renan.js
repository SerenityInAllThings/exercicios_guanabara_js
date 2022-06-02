// 50) Desenvolva um programa que faça o sorteio de 20 números entre 0 e 10 e
// mostre na tela:
// a) Quais foram os números sorteados
// b) Quantos números estão acima de 5
// c) Quantos números são divisíveis por 3

const s01 = Math.ceil(Math.random() * 10)
const s02 = Math.ceil(Math.random() * 10)
const s03 = Math.ceil(Math.random() * 10)
const s04 = Math.ceil(Math.random() * 10)
const s05 = Math.ceil(Math.random() * 10)
const s06 = Math.ceil(Math.random() * 10)
const s07 = Math.ceil(Math.random() * 10)
const s08 = Math.ceil(Math.random() * 10)
const s09 = Math.ceil(Math.random() * 10)
const s10 = Math.ceil(Math.random() * 10)
const s11 = Math.ceil(Math.random() * 10)
const s12 = Math.ceil(Math.random() * 10)
const s13 = Math.ceil(Math.random() * 10)
const s14 = Math.ceil(Math.random() * 10)
const s15 = Math.ceil(Math.random() * 10)
const s16 = Math.ceil(Math.random() * 10)
const s17 = Math.ceil(Math.random() * 10)
const s18 = Math.ceil(Math.random() * 10)
const s19 = Math.ceil(Math.random() * 10)
const s20 = Math.ceil(Math.random() * 10)
console.log(s01,s02,s03,s04,s05,s06,s07,s08,s09,s10,s11,s12,s13,s14,s15,s16,s17,s18,s19,s20)
let condicaoB = 0
let condicaoC = 0
if(s01>5){
    condicaoB+=1
}



const prompt = require('prompt-sync')({})

const jogoLegalprakrl  = () => {
    const randomChute = Math.ceil(Math.random() * 5)
    const chute = prompt("Chuta um número até 5, otário.\n")
    if(chute==randomChute){
        console.log("N-não é possível, o otário é clarividente!\n")
    }else{
        console.log("Errou, otário.")
    }
}
jogoLegalprakrl ()