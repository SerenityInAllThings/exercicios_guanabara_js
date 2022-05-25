const prompt = require('prompt-sync')({})

const calcularMedia = () =>{
    const nota1 = parseFloat(prompt("Qual nota da P1?"))
    const nota2 = parseFloat(prompt("Qual nota da P2?"))

    const media = (nota1+nota2)/2

    console.log('A média da P1',nota1,'com a P2',nota2,'é igual a',media)
}
calcularMedia()