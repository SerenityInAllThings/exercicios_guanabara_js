// 25) [DESAFIO] Crie um programa que leia o tamanho de três segmentos de reta.
// Analise seus comprimentos e diga se é possível formar um triângulo com essas
// retas. Matematicamente, para três segmentos formarem um triângulo, o comprimento
// de cada lado deve ser menor que a soma dos outros dois.
const prompt = require('prompt-sync')({})
const calcularTriangulo  = () => {
    const seg1 = parseFloat(prompt(`Digite o primeiro segmento.\n`))
    const seg2 = parseFloat(prompt(`Digite o segundo segmento.\n`))
    const seg3 = parseFloat(prompt(`Digite o terceiro segmento.\n`))
    let ladoMaior, ladoMenor1, ladoMenor2
    if (seg1>seg2&&seg1>seg3){
        ladoMaior = seg1
        ladoMenor1 = seg2
        ladoMenor2 = seg3
    }else if(seg2>seg1&&seg2>seg3){
        ladoMaior = seg2
        ladoMenor1 = seg1
        ladoMenor2 = seg3
    }else {
        ladoMaior = seg3
        ladoMenor1 = seg1
        ladoMenor2 = seg2
    }if (ladoMenor1+ladoMenor2>ladoMaior){
        console.log("Os segmentos formam um triângulo.")
    }else{
        console.log("Os segmentos não formam um triângulo.")
    }
        
    }
    calcularTriangulo();




// const lerSegRetas = () => {
//     let pergunta1 = parseFloat(prompt("Digite o comprimento da reta "))
//     let pergunta2 = parseFloat(prompt("Digite o comprimento de outra reta "))
//     let pergunta3 = parseFloat(prompt("Digite o comprimento de outra reta "))
//     let maiorReta, reta2, reta3
//     if (pergunta1 > pergunta2 && pergunta1 > pergunta3) {
//         maiorReta = pergunta1
//         reta2 = pergunta2
//         reta3 = pergunta3
//     } else if (pergunta2 > pergunta3 && pergunta2 > pergunta1) {
//         maiorReta = pergunta2
//         reta2 = pergunta1
//         reta3 = pergunta3
//     } else {
//         maiorReta = pergunta3
//         reta2 = pergunta1
//         reta3 = pergunta2
//     }
//     if (reta2+reta3 > maiorReta) {
//         console.log ("é um triângulo")
//     } else {
//         console.log ("não é um triângulo")
//     }
    
    
// }
// lerSegRetas();