const prompt = require('prompt-sync')({})

const lerPeso = () =>{
    const nomeFuncionario = prompt("Nome do Funcionario:")
    const replaceString = prompt("Salario do Funcionario:").replace(",",".")
    const salarioFuncionario = parseFloat(replaceString)

    console.log("O funcionário",nomeFuncionario,"tem um salário de de","$"+salarioFuncionario.toString().replace(",","."),"em Junho.")
}
lerPeso()