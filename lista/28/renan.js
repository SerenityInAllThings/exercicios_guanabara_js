// 28) Faça um programa que leia a largura e o comprimento de um terreno
// retangular, calculando e mostrando a sua área em m². O programa também
// devemostrar a classificação desse terreno, de acordo com a lista abaixo:
//  - Abaixo de 100m² = TERRENO POPULAR
//  - Entre 100m² e 500m² = TERRENO MASTER
//  - Acima de 500m² = TERRENO VIP
const prompt = require("prompt-sync")({})

const calcularArea = () => {
    const largura = parseFloat(prompt("Insira a largura de um terreno retangular.\n"))
    const comprimento = parseFloat(prompt("Insira o comprimento de um terreno retangular.\n"))
    const area = largura * comprimento
    if (area < 100) {
        console.log("TERRENO POPULAR")
    } else if (area >= 100 && area <= 500) {
        console.log("TERRENO MASTER")
    } else console.log("TERRENO VIP")
}
calcularArea()
