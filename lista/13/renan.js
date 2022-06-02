const prompt = require('prompt-sync')({})

const lerSalario = () => {
   let salario = parseInt(prompt("Digite o salário: ")) 
   console.log ("Seu novo salário, com 15% de aumento é de ", salario*0.15+salario)


}

lerSalario();