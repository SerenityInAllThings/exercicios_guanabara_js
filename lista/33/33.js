// 33) Escreva um programa para aprovar ou não o empréstimo bancário para a compra 
// de uma casa. O programa vai perguntar o valor da casa, o salário do comprador e 
// em quantos anos ele vai pagar. Calcule o valor da prestação mensal, sabendo que 
// ela não pode exceder 30% do salário ou então o empréstimo será negado.

const prompt = require('prompt-sync')({})

const consultarEmprestimoBancario = () => {
    const valorImovel = parseFloat(prompt("Digite valor do imóvel desejavel: R$ "))
    const salario = parseFloat(prompt("Digite seu salário atual?: R$ "))
    const anos = parseInt(prompt("Digite quantidade de anos para financiamento: "))
    const totalAnos = anos * 12
    const prestacao = valorImovel / totalAnos
    let salarioParcial = salario * 0.30
  
    if ( salarioParcial >= prestacao) {
        console.log ("Empréstimo pré-aprovado!")
    } else {
        console.log ("Empréstimo não aprovado!")
    }
   

}
consultarEmprestimoBancario();