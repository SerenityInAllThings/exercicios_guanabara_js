// 27) Crie um programa que leia duas notas de um aluno e calcule a sua média, 
// mostrando uma mensagem no final, de acordo com a média atingida:
//  - Média até 4.9: REPROVADO
//  - Média entre 5.0 e 6.9: RECUPERAÇÃO
//  - Média 7.0 ou superior: APROVADO

const prompt = require('prompt-sync')({})
// calcularMedia
const calculadorMedia  = () => {
    let notaProvaUm = parseFloat(prompt("Digite a nota da 1º prova: "))
    let notaProvaDois = parseFloat(prompt("Digite a nota da 2º prova: "))
    let media = (notaProvaUm + notaProvaDois) /2
    
    if (media < 4.9) {
        console.log ("Sua média foi:",media,"você foi REPROVADO")
    } else if (media > 4.9 && media < 7.0) {
        console.log ("Sua média foi:",media,"você está de RECUPERAÇÃO")
    } else {
        console.log ("Sua média foi:",media,"você foi APROVADO")
    }
}
calculadorMedia();