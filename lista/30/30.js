// 30) [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo 
// de triângulo será formado: 
//  - EQUILÁTERO: todos os lados iguais
//  - ISÓSCELES: dois lados iguais
//  - ESCALENO: todos os lados diferentes

const prompt = require('prompt-sync')({})

// const lerSegRetas2 = () => {
//     const retas = []
//     for(let r=0; r<3; r++)
//         retas.push(parseFloat(prompt("Digite o comprimento da reta " + (r+1) + ": ")))

//     retas = retas.sort()
//     let [menor, meio, maior] = retas // Destruturação
//     if (menor+meio > maior) {
//         console.log ("é um triângulo")
//     } else {
//         console.log ("não é um triângulo")
//     }
// }


const lerSegRetas = () => {
    let pergunta1 = parseFloat(prompt("Digite o comprimento da reta "))
    let pergunta2 = parseFloat(prompt("Digite o comprimento de outra reta "))
    let pergunta3 = parseFloat(prompt("Digite o comprimento de outra reta "))
    let maiorReta, reta2, reta3
    if (pergunta1 > pergunta2 && pergunta1 > pergunta3) {
        maiorReta = pergunta1
        reta2 = pergunta2
        reta3 = pergunta3
    } else if (pergunta2 > pergunta3 && pergunta2 > pergunta1) {
        maiorReta = pergunta2
        reta2 = pergunta1
        reta3 = pergunta3
    } else {
        maiorReta = pergunta3
        reta2 = pergunta1
        reta3 = pergunta2
    }
    if (reta2+reta3 > maiorReta) {
        if (reta2 == reta3 && reta2 == maiorReta && reta3 == maiorReta) {
            console.log ("é um triângulo EQUILATERO");
    }   else if (reta2 == reta3 || reta2 == maiorReta || maiorReta == reta3 ){
            console.log ("é um triângulo ISÓSCELES");
    }   else {
            console.log ("é um triângulo ESCALENO");
    }   
    }   else {
        console.log ("não é um triângulo")
    }    
        
  
    
    
}
lerSegRetas();