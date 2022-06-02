// 24) Faça um algoritmo que pergunte a distância que um passageiro deseja
// percorrer em Km. Calcule o preço da passagem, cobrando R$0.50 por Km para
// viagens até 200Km e R$0.45 para viagens mais longas.

const prompt = require('prompt-sync')({})

const calcularValorPercorrido  = () => {
    const distanciaPercorrer = parseFloat(prompt("Digita a distância que desejas percorrer em km."))
    if(distanciaPercorrer>200){
        let preçoPassagem = distanciaPercorrer*0.45
        console.log(preçoPassagem)
    }else {
        let preçoPassagem = distanciaPercorrer*0.5
        console.log(preçoPassagem)
    }    
}
const calcularValorPercorrido2  = () => {
  const distanciaPercorrer = parseFloat(prompt("Digita a distância que desejas percorrer em km."))
  let preçoPassagem
  if(distanciaPercorrer>200) preçoPassagem = distanciaPercorrer*0.45
  else preçoPassagem = distanciaPercorrer*0.5
  console.log(preçoPassagem)
}
calcularValorPercorrido()
