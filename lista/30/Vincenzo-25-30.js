const prompt = require('prompt-sync')({})

const calcularArea = () => {
    const seg1 = parseFloat(prompt('Qual o comprimento do segmento de reta 1?'));
    const seg2 = parseFloat(prompt('Qual o comprimento do segmento de reta 2?'));
    const seg3 = parseFloat(prompt('Qual o comprimento do segmento de reta 3?'));
    const isTriangle = seg1 < seg2 + seg3 && seg2 < seg1 + seg3 && seg3 < seg1 + seg2

    if (isTriangle ) {
        
    }else if (seg1 < seg2 + seg3 && seg2 < seg1 + seg3 && seg3 < seg1 + seg2 && seg1 == seg2 || seg2 == seg3 || seg3 == seg1) {
        console.log('É possível construir um triângulo isosceles pois pelo menos duas retas possuem o mesmo tamanho')
    }else if (seg1 < seg2 + seg3 && seg2 < seg1 + seg3 && seg3 < seg1 + seg2 && seg1 != seg2 && seg2 != seg3 && seg3 != seg1) {
        console.log('É possível construir um triângulo escaleno pois todos os lados possuem tamanho diferente')
    } else {
        console.log('bolsonaro')
    }
}
calcularArea();

// console.log('É possível construir um triângulo equilatero pois todas as retas possuem o mesmo tamanho')
// && seg1 == seg2 && seg2 == seg3 && seg1 == seg3