// 34) O Índice de Massa Corpórea (IMC) é um valor calculado baseado na altura e no 
// peso de uma pessoa. De acordo com o valor do IMC, podemos classificar o 
// indivíduo dentro de certas faixas.
//  - abaixo de 18.5: Abaixo do peso
//  - entre 18.5 e 25: Peso ideal
//  - entre 25 e 30: Sobrepeso
//  - entre 30 e 40: Obesidade
//  - acima de 40: Obseidade mórbida
// Obs: O IMC é calculado pela expressão peso/altura² (peso dividido pelo quadrado 
// da altura)

const prompt = require('prompt-sync')({})

const medirIMC = () => {
    const altura = parseFloat(prompt("Digite sua altura: "))
    const peso = parseFloat(prompt("Digite seu peso: "))
    let imc = peso / altura ** 2
    let st = imc.toString()
    let imcString = (st.slice(0, 4))
    let imcFloat = parseFloat(imcString)

    if (imcFloat < 18.5) {
        console.log ("Você está ABAIXO DO PESO")
        console.log (imcFloat)    
    }else if (imcFloat >= 18.5 && imcFloat <= 25) {
        console.log ("Você está no PESO IDEAL")
        console.log (imcFloat) 
    }else if (imcFloat > 25 && imcFloat <= 30) {
        console.log ("Você está com SOBREPESO")
        console.log (imcFloat)  
    }else if (imcFloat > 30 && imcFloat <= 40) {
        console.log ("Você está com OBESIDADE")
        console.log (imcFloat) 
    }else{
        console.log ("VOCÊ ESTÁ COM OBESIDADE MORBIDA FILHA DA PUTA")
        console.log (imcFloat) 
    }   
}
medirIMC();