/* 2) Faça um programa que leia o nome de uma pessoa e mostre uma mensagem de boasvindas para ela:
Ex:
Qual é o seu nome? João da Silva
Olá João da Silva, é um prazer te conhecer! */

// Write a JavaScript function to check whether a string is blank or not
// Escrever função que determinar se o valor recebido é uma string vazia

// Escrever fn
function isBlank(valor) {
  if (valor === "") {
    return true
  } else {
    return false
  }
}

let valores = [false, "texto", "", undefined]
valores.push(undefined)

let index = 0
while (index < valores.length) {
  const valorAtual = valores[index]
  const resultado = isBlank(valorAtual)
  console.log(resultado)
  console.log(index)
  console.log(valorAtual)
  index++
}

// for (let index = 0; index < valores.length; index++) {
//     const valorAtual = valores[index]
//     const resultado = isBlank(valorAtual)
//     console.log(resultado)
// }

// for each
// for (let valorAtual of valores) {

// }

// [false, 'texto', '', undefined].map(isBlank).forEach(console.log)

// isBlank(false)
// isBlank("texto")
// isBlank("")
// isBlank()
