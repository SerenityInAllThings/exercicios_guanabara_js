// 18) Faça um programa que leia o ano de nascimento de uma pessoa, calcule a idade 
// dela e depois mostre se ela pode ou não votar.

const prompt = require('prompt-sync')({})

// 1 - Tornar o ano atual dinâmico
// 2 - melhorar verificação de edge cases
const lerAnoNascimento = () => {
    let anoNascimento = parseInt(prompt("Digite o ano do seu nascimento: "));
    if (anoNascimento > -1) {
      const agora = new Date()
      let idade = agora.getFullYear() - anoNascimento
      console.log (idade)
      if (idade > 16) {
        console.log ("Meus parabéns, você já pode tirar o seu titulo de eleitor")
      } else {
        console.log ("Você ainda não atingiu a maior idade, portanto não pode votar")
      }
    }
}

const lerAnoNascimento2 = () => {
  let anoNascimento = parseInt(prompt("Digite o ano do seu nascimento: "));
  if (anoNascimento < 0)
    return

  const agora = new Date()
  let idade = agora.getFullYear() - anoNascimento
  console.log (idade)
  if (idade > 16) {
    console.log ("Meus parabéns, você já pode tirar o seu titulo de eleitor")
  } else {
    console.log ("Você ainda não atingiu a maior idade, portanto não pode votar")
  }
}
lerAnoNascimento2();