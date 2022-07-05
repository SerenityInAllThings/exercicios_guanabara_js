const prompt = require('prompt-sync')({})

const mostrarNumInt = () =>{
    const numeroInput = parseInt(prompt('Digite um numero:'))

    const antecessor = numeroInput - 1
    const sucessor = numeroInput + 1

    console.log('O antecessor de',numeroInput,'é',antecessor)
    console.log('O sucessor de',numeroInput,'é',sucessor)
}
mostrarNumInt()