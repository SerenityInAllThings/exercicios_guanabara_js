// 19) Crie um algoritmo que leia o nome e as duas notas de um aluno, calcule a sua 
// média e mostre na tela. No final, analise a média e mostre se o aluno teve ou 
// não um bom aproveitamento (se ficou acima da média 7.0).

const prompt = require('prompt-sync')({})

const lerNomeAluno = () => {
    let nome = prompt("Olá, qual o seu nome? ")
    let notaUm = parseFloat(prompt("Qual foi sua nota na prova1? "))
    let notaDois = parseFloat(prompt("Qual foi sua nota na prova2? "))
    let valorMedia = (notaUm+notaDois) /2
    if (valorMedia >= 7.0) {
        console.log (nome, "teve bom aproveitamento", valorMedia)
    } else {
        console.log (nome, "não teve um bom aproveitamento")
    }

}
lerNomeAluno();