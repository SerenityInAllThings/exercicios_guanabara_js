// 4) Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório
// entre eles.
// Ex:
// Digite um valor: 8
// Digite outro valor: 5
// A soma entre 8 e 5 é igual a 13.
const prompt = require ('prompt-sync')({})

const mostrarSoma = () => {
  let primeiroNum = parseInt(prompt ("Digite um número: "))
  let segundoNum = parseInt(prompt ("Digite outro número "))

  console.log ("a soma entre", primeiroNum, "e", segundoNum, "é igual a",primeiroNum+segundoNum)
}

mostrarSoma()
