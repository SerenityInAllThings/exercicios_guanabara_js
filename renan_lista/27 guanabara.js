// 27) Crie um programa que leia duas notas de um aluno e calcule a sua média,
// mostrando uma mensagem no final, de acordo com a média atingida:
//  - Média até 4.9: REPROVADO
//  - Média entre 5.0 e 6.9: RECUPERAÇÃO
//  - Média 7.0 ou superior: APROVADO

const prompt = require('prompt-sync')({})

const calcularMedia = () => {
    let nota1 = parseFloat(prompt("Digite o primeiro valor.\n"))
    let nota2 = parseFloat(prompt("Digite o segundo valor.\n"))
    let media = (nota1+nota2)/2
    console.log (media)
    if(media<5){        
        console.log ("REPROVADO")
    }else if(media>=5 && media<7){
        console.log("RECUPERAÇÃO")
    }else{
        console.log("APROVADO")
    }
}
calcularMedia()
