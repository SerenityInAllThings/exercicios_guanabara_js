// 6) Faça um programa que leia um número inteiro e mostre o seu antecessor e seu
// sucessor.
// Ex:
// Digite um número: 9
// O antecessor de 9 é 8
// O sucessor de 9 é 10
const prompt = require('prompt-sync')({})

const monstrarNumMenorMaior = () => {
  let numeroInt = parseInt(prompt("Digite um número "))
  console.log ("O antecessor de", numeroInt, "é", numeroInt - 1)
  console.log ("O sucessor de", numeroInt, "é", numeroInt + 1)
}
monstrarNumMenorMaior()