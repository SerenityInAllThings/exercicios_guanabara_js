// 28) Faça um programa que leia a largura e o comprimento de um terreno 
// retangular, calculando e mostrando a sua área em m². O programa também 
// deve mostrar a classificação desse terreno, de acordo com a lista abaixo:
//  - Abaixo de 100m² = TERRENO POPULAR
//  - Entre 100m² e 500m² = TERRENO MASTER
//  - Acima de 500m² = TERRENO VIP

const prompt = require('prompt-sync')({})

const calcularMedidaTerreno = () => {
    let comprimento = parseFloat(prompt("Digite o comprimento do terreno: "))
    let largura = parseFloat(prompt("Digite a largura do terreno: "))
    let metrosQuadrado = comprimento*largura
    if (metrosQuadrado < 100) {
        console.log ("Seu terreno possui: ",metrosQuadrado,"m2 classificado como TERRENO POPULAR")
    } else if (metrosQuadrado >= 100 && metrosQuadrado <= 500) {
        console.log ("Seu terreno possui: ",metrosQuadrado,"m2 classificado como TERRENO MASTER")
    } else {
        console.log ("Seu terreno possui: ",metrosQuadrado,"m2 classificado como TERRENO VIP")
    }
}

calcularMedidaTerreno();
