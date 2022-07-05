// 30) [DESAFIO] Refaça o algoritmo 25, acrescentando o recurso de mostrar que tipo
// de triângulo será formado:
//  - EQUILÁTERO: todos os lados iguais
//  - ISÓSCELES: dois lados iguais
//  - ESCALENO: todos os lados diferentes
const prompt = require("prompt-sync")({})

const calcularTriangulo = () => {
    let seg1 = parseFloat(prompt(`Digite o primeiro segmento.\n`))
    let seg2 = parseFloat(prompt(`Digite o segundo segmento.\n`))
    let seg3 = parseFloat(prompt(`Digite o terceiro segmento.\n`))
    let ladoMaior, ladoMenor1, ladoMenor2
    if (seg1 > seg2 && seg1 > seg3) {
        ladoMaior = seg1
        ladoMenor1 = seg2
        ladoMenor2 = seg3
    } else if (seg2 > seg1 && seg2 > seg3) {
        ladoMaior = seg2
        ladoMenor1 = seg1
        ladoMenor2 = seg3
    } else {
        ladoMaior = seg3
        ladoMenor1 = seg1
        ladoMenor2 = seg2
    }
    if (ladoMenor1 + ladoMenor2 > ladoMaior) {
        console.log("Os segmentos formam um triângulo.")
    } else {
        console.log("Os segmentos não formam um triângulo.")
    }
    if (seg1 == seg2 && seg2 == seg3) {
        console.log("É um triângulo equilátero.")
    } else if (seg1 == seg2 || seg2 == seg3 || seg1 == seg3) {
        console.log("O triângulo é isóceles.")
    } else {
        console.log("O triângulo é escaleno.")
    }
}
calcularTriangulo()
