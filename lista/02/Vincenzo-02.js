const prompt = require('prompt-sync')({})

const lerNome = () =>{
    const Nome = prompt("Qual é o seu nome?")
    console.log("Olá",Nome,", é um prazer te conhecer!")
}
lerNome()