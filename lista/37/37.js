// 37) Uma empresa precisa reajustar o salário dos seus funcionários, dando um 
// aumento de acordo com alguns fatores. Faça um programa que leia o salário atual, 
// o gênero do funcionário e há quantos anos esse funcionário trabalha na empresa. 
// No final, mostre o seu novo salário, baseado na tabela a seguir:
// - Mulheres
//  - menos de 15 anos de empresa: +5%
//  - de 15 até 20 anos de empresa: +12%
//  - mais de 20 anos de empresa: +23%
// - Homens
//  - menos de 20 anos de empresa: +3%
//  - de 20 até 30 anos de empresa: +13%
//  - mais de 30 anos de empresa: +25%


// Entendi a questão perfeitamente!
// Gostaria de adaptar o que a questão pede. Usando o metodo que criei de filtar como a pessoa se identifica!
// Então vamos considerar que todos são "iguais", portanto ganhando a mesma taxa de aumento salárial.
//  - menos de 20 anos de empresa: +3%
//  - de 20 até 30 anos de empresa: +13%
//  - mais de 30 anos de empresa: +25%
// TKS QAP NA ESCUTA

const prompt = require('prompt-sync') ({})
const { isString } = require('./funcoes')

const getUpperDiversidade = () => {
    return diversidade.map(d => d.toUpperCase())
}
let diversidade = [  
"Feminino",
"Masculino",
"Lésbicas", 
"Gays", 
"Bissexuais",
"Transgêneros", 
"Queer", 
"Questionando", 
"Intersexuais", 
"Curioso", 
"Assexuais", 
"Aliados", 
"Pansexuais", 
"Polissexuais", 
"Familiares", 
"2-espíritos", 
"Kink",
]
let resultadoSalario
let resultadoAnosEmpresa
const reavaliarFuncionario = () => {
let salario
    do {
        salario = parseFloat(prompt("Digite o valor do salário novamente! : R$"))
        resultadoSalario = isString(salario) 
                   
   } while (resultadoSalario)
    
   const gênero = prompt("Digite como você se identifica : ")

    while (!getUpperDiversidade().includes(gênero.toUpperCase())) {
        let pergunta = prompt("Entendi!!! Então como gostaria de ser chamado? : ")
        diversidade.push(pergunta)
        console.log ("Ok!",pergunta, "vamos prosseguir!")
    }
    
    do {
        let anosDeEmpresa = parseInt(prompt("A quantos anos o funcionário trabalha na empresa ? "))
        resultadoAnosEmpresa = isString(anosDeEmpresa)
        if (anosDeEmpresa < 20) {
            console.log ("Seu novo salário sera de : R$",salario * 0.03 + salario)
        } else if (anosDeEmpresa >= 20 || anosDeEmpresa <= 30) {
            console.log ("Seu novo salário sera de : R$",salario * 0.13 + salario)
        } else {
            console.log ("Seu novo salário sera de : R$",salario * 0.25 + salario)
        }
    } while (resultadoAnosEmpresa)
    

}
reavaliarFuncionario()
reavaliarFuncionario()
