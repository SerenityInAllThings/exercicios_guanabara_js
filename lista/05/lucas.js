// 5) Faça um programa que leia as duas notas de um aluno em uma matéria e mostre
// na tela a sua média na disciplina.
// Ex:
// Nota 1: 4.5
// Nota 2: 8.5
// A média entre 4.5 e 8.5 é igual a 6.5
const prompt = require('prompt-sync')({})

const monstrarMédia = () => {
  let notaUm = parseInt(prompt("Qual foi sua primeira nota?: "))
  let notaDois = parseInt(prompt("E sua segunda?: "))
  console.log ("A média entre", notaUm, "e", notaDois, "é igual a", (notaUm+notaDois) / 2)
}
monstrarMédia()