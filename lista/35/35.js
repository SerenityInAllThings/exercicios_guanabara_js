// 35) Uma empresa de aluguel de carros precisa cobrar pelos seus serviços. O 
// aluguel de um carro custa R$90 por dia para carro popular e R$150 por dia para 
// carro de luxo. Além disso, o cliente paga por Km percorrido. Faça um programa
// que leia o tipo de carro alugado (popular ou luxo), quantos dias de aluguel e 
// quantos Km foram percorridos. No final mostre o preço a ser pago de acordo com a 
// tabela a seguir:
//  - Carros populares (aluguel de R$90 por dia)
//  - Até 100Km percorridos: R$0,20 por Km
//  - Acima de 100Km percorridos: R$0,10 por Km
//  - Carros de luxo (aluguel de R$150 por dia)
//  - Até 200Km percorridos: R$0,30 por Km
//  - Acima de 200Km percorridos: R$0,25 por Km

const prompt = require('prompt-sync')({})

const calculoPrecoASerPago = () => {
    const carros = prompt("Qual a classificação do carro POPULAR ou LUXO?: ").toLowerCase()    
    const km = parseFloat(prompt("Digite quantos KMs foram percorridos: "))
    const dia = parseInt(prompt("Quantos dias o carro foi alugado: "))
    

    if (carros == "popular"){
        if (km <= 100) {
            console.log ("Preço a pagar : R$ ",km*0.20 + dia*90)        
        } else if (km > 100) {
            console.log ("Preço a pagar : R$ ", km*0.10 + dia*90)
        }               
    }
    if (carros == "luxo"){
        if (km <= 200){
            console.log ("Preço a pagar : R$ ", km*0.30 + dia*150)
        } else if ( km > 200) {
            console.log ("Preço a pagar : R$ ", km*0.25 + dia*150)
        }
    }
} 
calculoPrecoASerPago()