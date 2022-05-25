const prompt = require('prompt-sync')({})

const lerNumero = () =>{
    const numero = parseFloat(prompt('Digite um numero:'))
    const numeroDobro = numero * 2
    const numeroTercaParte = numero/3

    console.log('O dobro de',numero,'é',numeroDobro)
    console.log('A terça parte de',numero,'é',numeroTercaParte.toFixed(4))
}
lerNumero()
