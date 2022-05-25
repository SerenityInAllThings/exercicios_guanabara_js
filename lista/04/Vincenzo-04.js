const prompt = require('prompt-sync')({})

const lerNumeroInteiro = () =>{
    const numero1 = parseInt(prompt("Valor 1:"))
    const numero2 = parseInt(prompt("Valor 2:"))
    const somaNum1_2 = numero1 + numero2

    console.log("A soma entre 8 e 5 é igual a",somaNum1_2.toString())
}
lerNumeroInteiro()