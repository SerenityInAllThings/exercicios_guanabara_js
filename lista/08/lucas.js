// 8) Desenvolva um programa que leia uma distância em metros e mostre os valores
// relativos em outras medidas.
// Ex:
// Digite uma distância em metros: 185.72
// A distância de 85.7m corresponde a:
// 0.18572Km
// 1.8572Hm
// 18.572Dam
// 1857.2dm
// 18572.0cm
// 185720.0mm
const prompt = require('prompt-sync')({})

const distância = () => {
    let valorNum = prompt ("Digite um número: ")
    console.log ("A distância do número " +valorNum+" corresponde a:")
    console.log (valorNum/1000+"Km")
    console.log (valorNum*100+"Hm")
    console.log (valorNum*0.100000+"Dam")
    console.log (valorNum*10.00+"Dm")
    console.log (valorNum*100.00+"Cm")
    console.log (valorNum*1000+"Mm")
}

distância()
