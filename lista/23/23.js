// 23) Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar descontos 
// para todos, mas especialmente para mulheres. Faça um programa que leia nome, 
// sexo e o valor das compras do cliente e calcule o preço com desconto. Sabendo 
// que:
//  - Homens ganham 5% de desconto
//  - Mulheres ganham 13% de desconto

const prompt = require('prompt-sync')({})

const promoçãoDiaMulher = () => {
    let nome = prompt("Qual seu nome? :")
    let sexo = prompt("qual sexo? M/F :")
    let valor = parseFloat(prompt("Digite o R$ gasto para calcular desconto promocional: "))
    if (sexo === "F" || sexo === "Mulher" || sexo === "Feminino") {
        let valorDesconto = valor * 0.13
        console.log ("Parabéns mulher! o seu desconto foi de ",valorDesconto,"totalizando R$",valor - valorDesconto)
    }

}

const promoçãoDiaMulher2 = () => {
  let nome = prompt("Qual seu nome? :")
  let sexo = prompt("qual sexo? M/F :")
  let valor = parseFloat(prompt("Digite o R$ gasto para calcular desconto promocional: "))
  const opcoes = ['f', 'mulher', 'feminino']
  if (opcoes.includes(sexo.toLowerCase())) {
      let valorDesconto = valor * 0.13
      console.log ("Parabéns mulher! o seu desconto foi de ",valorDesconto,"totalizando R$",valor - valorDesconto)
  }

}
promoçãoDiaMulher();